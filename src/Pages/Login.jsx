import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import NavPrincipal from "../components/Principal/NavPrincipal";
import axios from "axios";
import { useRef } from "react";

const Login = () => {
  let emailRef = useRef();
  let passwordRef = useRef();

  const login = () => {
    axios.defaults.withCredentials = true;

    console.log(emailRef.current.value, ", pass: ", passwordRef.current.value);
    axios
      .post(
        "http://localhost:3000/api/auth/login" +
          `?password=${passwordRef.current.value}&email=${emailRef.current.value}`
      )
      .then((response) => {
        console.log(response.data);
        axios.defaults.withCredentials
          ? (window.location.href = "/")
          : (window.location.href = "/login");
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/login";
      });
  };

  return (
    <>
      <NavPrincipal titulo={"Login"} />

      <Col md={4} style={{ marginTop: "3em" }}>
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

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </FloatingLabel>

        <Button
          onClick={() => login()}
          variant="primary"
          type="button"
          style={{ margin: "5em", width: "10rem" }}
        >
          Login
        </Button>
      </Col>
    </>
  );
};

export default Login;
