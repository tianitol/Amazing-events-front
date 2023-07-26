import "./styles/form.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

const FormContact = () => {
  let name = useRef();
  let email = useRef();
  let message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const messageValue = message.current.value;

    // Realizar la lógica con los valores obtenidos de los inputs
    console.log(nameValue, emailValue, messageValue);
  };

  return (
    <>
      <Form className="form-contact">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="ex: Nicole" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            ref={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} ref={message} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default FormContact;
