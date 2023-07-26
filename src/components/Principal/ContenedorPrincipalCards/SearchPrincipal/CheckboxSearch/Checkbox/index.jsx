import "./styles/checkbox.css";

import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
/* eslint-disable react/prop-types */
import { useRef } from "react";

const Checkbox = (props) => {
  let cambioCheckbox = useRef();

  const handleCheckboxChecked = async () => {
    await props.obtenerCategoriasChecked(
      cambioCheckbox.current.checked,
      props.categoria
    );
    props.filtrarEventos(props.searchText);
  };

  return (
    <>
      <Col xs="auto" className="my-1">
        <Form.Check
          //aquí debo poner un evento que llame a una función que atrape las
          //categorias de los checkbox checked en un array para filtrar por todas las categorías activas
          onChange={handleCheckboxChecked}
          type="checkbox"
          id="autoSizingCheck2"
          label={props.categoria}
          ref={cambioCheckbox}
        />
      </Col>
    </>
  );
};

export default Checkbox;
