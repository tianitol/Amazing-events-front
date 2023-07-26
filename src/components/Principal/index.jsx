/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import ContenedorPrincipal from "./ContenedorPrincipalCards";
import NavPrincipal from "./NavPrincipal";
import SearchPrincipal from "./ContenedorPrincipalCards/SearchPrincipal";

const Principal = (props) => {
  let [eventos, setEventos] = useState([]);
  let [eventosFiltrados, setEventosFiltrados] = useState([]);
  let [categoriasChecked, setCategoriasChecked] = useState([]);

  let categoriasCheck = [];

  useEffect(() => {
    setEventos(props.eventos);
    setEventosFiltrados(props.eventos);
  }, [categoriasChecked, props.eventos]);

  const filtrarEventos = (text) => {
    let eventosFiltradosPorTexto = eventos.filter((evento) =>
      evento.name.toLowerCase().includes(text.toLowerCase())
    );

    if (text === "") {
      if (categoriasCheck.length < 1) {
        console.log("sin texto sin checkbox");
        setEventosFiltrados(eventos);
      } else {
        setEventosFiltrados(
          eventos.filter((e) => categoriasCheck.includes(e.category))
        );
        console.log("sin texto con checkbox");
      }
    } else {
      console.log(categoriasCheck, text);

      if (categoriasCheck.length < 1) {
        setEventosFiltrados(eventosFiltradosPorTexto);
        console.log("por texto sin checkbox");
      } else {
        setEventosFiltrados(
          eventosFiltradosPorTexto.filter((e) =>
            categoriasCheck.includes(e.category)
          )
        );
        console.log("por texto con checkbox");
      }
    }
  };

  const obtenerCategoriasChecked = (check, categoria) => {
    if (!check) {
      setCategoriasChecked((prevChecked) => {
        categoriasCheck = prevChecked.filter((cat) => cat !== categoria);
        return categoriasCheck;
      });
    } else {
      setCategoriasChecked((prevChecked) => {
        categoriasCheck = [...prevChecked, categoria];
        return categoriasCheck;
      });
    }

    //console.log(categoria + " ha cambiado, se ha vuelto: " + check);
  };

  return (
    <>
      <NavPrincipal titulo={props.titulo} />
      <SearchPrincipal
        filtrarEventos={filtrarEventos}
        obtenerCategoriasChecked={obtenerCategoriasChecked}
      />
      <ContenedorPrincipal eventos={eventosFiltrados} />
    </>
  );
};

export default Principal;
