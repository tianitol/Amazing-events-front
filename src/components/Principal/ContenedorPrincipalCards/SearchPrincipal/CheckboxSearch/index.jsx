import "./styles/checkboxSearch.css";

/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import Checkbox from "./Checkbox";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import StateContext from "../../../../../store/StateContext";

const CheckboxSearch = (props) => {
  let { categories } = useContext(StateContext);

  let [categorias, setCategorias] = useState([]);

  useEffect(() => {
    setCategorias(categories);
  }, [categories]);

  return (
    <>
      <Form>
        <Row className="align-items-center">
          {categorias.map((categoria, index) => {
            return (
              <Checkbox
                categoria={categoria}
                key={index}
                filtrarEventos={props.filtrarEventos}
                searchText={props.searchText}
                obtenerCategoriasChecked={props.obtenerCategoriasChecked}
              />
            );
          })}
        </Row>
      </Form>
    </>
  );
};

export default CheckboxSearch;
