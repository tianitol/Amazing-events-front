/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardPrincipal(props) {
  let [evento, setEvento] = useState([]);

  useEffect(() => {
    setEvento(props.evento);
  }, [props.evento]);
  return (
    <Card style={{ width: "18rem", margin: "1em", fontSize: "1em" }}>
      <Card.Img variant="top" src={evento.image} />
      <Card.Body style={{ width: "100%", justifyContent: "center" }}>
        <Card.Title>{evento.name}</Card.Title>
        <Card.Text>{evento.date}</Card.Text>
        <Card.Text>{evento.location}</Card.Text>
        <Card.Text>{evento.description}</Card.Text>
        <Link to={"/details/" + evento._id}>Details</Link>
      </Card.Body>
    </Card>
  );
}

export default CardPrincipal;
