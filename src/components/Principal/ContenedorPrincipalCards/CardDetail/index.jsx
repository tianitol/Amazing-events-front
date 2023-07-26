import "./styles/cardDetail.css";

import { useContext, useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import StateContext from "../../../../store/StateContext";
import { useParams } from "react-router-dom";

function CardDetail() {
  let { events } = useContext(StateContext);
  let [eventos, setEventos] = useState([]);
  let [eventoFiltrado, setEventoFiltrado] = useState({});

  useEffect(() => {
    setEventos(events);
  }, [events]);

  let params = useParams();

  useEffect(() => {
    setEventoFiltrado(eventos.find((evento) => evento._id == params.id));
  }, [eventos, params.id]);

  return (
    <>
      {eventoFiltrado && (
        <Card className="card-detail">
          <Card.Img
            className="card-img"
            variant="top"
            src={eventoFiltrado.image}
          />
          <Card.Body className="card-body">
            <Card.Header style={{ fontSize: "1.5em" }}>
              {eventoFiltrado.category}
            </Card.Header>
            <Card.Title>{eventoFiltrado.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <p>{eventoFiltrado.date}</p>
              <p>{"Location: " + eventoFiltrado.place}</p>
            </Card.Subtitle>
            <Card.Text>{eventoFiltrado.description}</Card.Text>
            <h5>{"Price: " + eventoFiltrado.price}</h5>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default CardDetail;
