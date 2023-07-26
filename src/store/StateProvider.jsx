/* eslint-disable no-prototype-builtins */
import StateContext from "./StateContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const StateProvider = ({ children }) => {
  let [events, setEvents] = useState([]);
  let [pastEvents, setPastEvents] = useState([]);
  let [futureEvents, setFutureEvents] = useState([]);
  let [categories, setCategories] = useState([]);
  let [event, setEvent] = useState([
    {
      _id: 0,
      name: "",
      category: "",
      date: new Date(),
      description: "",
      image: "",
      place: "",
      price: 0,
      capacity: 0,
      assistance: 0,
      estimate: 0,
    },
  ]);

  const getEvent = (eventos) => {
    let evento = eventos.map((evento) => {
      evento;
    });
    setEvent(evento);
    return evento;
  };
  const loadEvents = (eventos) => {
    setEvents(eventos);
    loadCategories(eventos);
  };

  const loadPastEvents = (eventos) => {
    setPastEvents(
      eventos.filter((evento) => evento.hasOwnProperty("assistance"))
    );
  };

  const loadFutureEvents = (eventos) => {
    setFutureEvents(
      eventos.filter((evento) => evento.hasOwnProperty("estimate"))
    );
  };

  const loadCategories = (eventos) => {
    let uniqueCategories = [...new Set(eventos.map((e) => e.category))];
    setCategories(uniqueCategories);
  };
  const initialState = {
    events,
    pastEvents,
    futureEvents,
    event,
    categories,
    getEvent,
    loadEvents,
    loadCategories,
    loadPastEvents,
    loadFutureEvents,
  };

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
