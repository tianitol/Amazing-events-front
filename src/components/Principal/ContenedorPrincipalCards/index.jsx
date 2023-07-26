import "./styles/contenedorPrincipal.css";

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import CardPrincipal from "./CardPrincipal";

const ContenedorPrincipal = (props) => {
  let [eventos, setEventos] = useState([]);

  useEffect(() => {
    setEventos(props.eventos);
  }, [props.eventos]);

  return (
    <div className="div-contenedor-principal">
      {eventos.map((evento, index) => {
        return <CardPrincipal evento={evento} key={index} />;
      })}
    </div>
  );
};

export default ContenedorPrincipal;
