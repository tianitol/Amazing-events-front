import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import NavPrincipal from "../components/Principal/NavPrincipal";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Register = () => {
  let usernameRef = useRef();
  let emailRef = useRef();
  let rolRef = useRef();
  let passwordRef = useRef();

  //let navigate = useNavigate();

  const register = () => {
    let usernameValue = usernameRef.current.value;
    let emailValue = emailRef.current.value;
    let rolValue = rolRef.current.value;
    let passValue = passwordRef.current.value;

    axios.defaults.withCredentials = true;
    // console.log(
    //   "datos usuario: ",
    //   usernameRef.current.value,
    //   emailRef.current.value,
    //   rolRef.current.value,
    //   passwordRef.current.value
    // );
    axios
      .post("http://localhost:3000/api/customers", {
        username: usernameValue,
        password: passValue,
        rol: rolValue,
        email: emailValue,
      })
      .then((response) => {
        alert("User successfully created");
        console.log(response.data);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data);
        // axios.defaults.withCredentials
        //   ? (window.location.href = "/register")
        //   : navigate("/login");
      });
  };

  return (
    <>
      <NavPrincipal titulo={"Register"} />

      <Col md={4} style={{ marginTop: "3em" }}>
        <FloatingLabel
          controlId="floatingInput"
          label="username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="username" ref={usernameRef} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            ref={emailRef}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Rol" className="mb-3">
          <Form.Control type="text" placeholder="user or admin" ref={rolRef} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </FloatingLabel>

        <Button
          onClick={() => register()}
          variant="primary"
          type="button"
          style={{ margin: "5em", width: "10rem" }}
        >
          New User
        </Button>
      </Col>
    </>
  );
};

export default Register;
