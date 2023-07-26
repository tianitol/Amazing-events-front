/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const InputSearch = (props) => {
  let inputTexto = useRef();

  useEffect(() => {
    // console.log(inputTexto.current.value);
  }, [inputTexto]);

  return (
    <>
      <Form>
        <Row className="align-items-center">
          <Col sm="auto" className="my-1">
            <Form.Label htmlFor="inlineFormSearch" visuallyHidden>
              by event name
            </Form.Label>
            <Form.Control
              ref={inputTexto}
              size="sm"
              id="inlineFormSearch"
              placeholder="search by event name"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              onClick={() => props.filtrarEventos(inputTexto.current.value)}
              size="sm"
              variant="success"
              type="button"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default InputSearch;
