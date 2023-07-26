/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
//import { useContext, useEffect, useState } from "react";

import { useContext, useEffect, useState } from "react";

import Principal from "../components/Principal";
import StateContext from "../store/StateContext";
import { useParams } from "react-router-dom";

const Home = () => {
  let { events, pastEvents, futureEvents } = useContext(StateContext);

  let [eventos, setEventos] = useState([]);
  let [eventosPasados, setEventosPasados] = useState([]);
  let [eventosFuturos, setEventosFuturos] = useState([]);

  let params = useParams();
  //console.log(params.events);

  useEffect(() => {
    setEventos(events);
    setEventosFuturos(futureEvents);
    setEventosPasados(pastEvents);
  }, [events, futureEvents, pastEvents]);

  return (
    <>
      {params.events == "past" ? (
        <Principal eventos={eventosPasados} titulo={"Past Events"} />
      ) : params.events == "upcoming" ? (
        <Principal eventos={eventosFuturos} titulo={"Upcoming Events"} />
      ) : (
        <Principal eventos={eventos} titulo={"Home"} />
      )}
    </>
  );
};

export default Home;
