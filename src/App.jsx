/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";

import Contact from "./Pages/Contact";
import Details from "./Pages/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import StateContext from "./store/StateContext";
import Stats from "./Pages/Stats";
import axios from "axios";

function App() {
  let { loadEvents, loadPastEvents, loadFutureEvents } =
    useContext(StateContext);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3000/api/eventos/")
      .then((response) => {
        loadEvents(response.data);
        loadPastEvents(response.data);
        loadFutureEvents(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Router>
        <Header />

        {axios.defaults.withCredentials ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:events" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>La página no existe</h2>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        )}

        <Footer />
      </Router>
    </>
  );
}

export default App;
