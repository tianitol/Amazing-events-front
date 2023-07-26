import "./styles/navHeader.css";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

function NavHeader() {
  const logout = () => {
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3000/api/auth/logout")
      .then((response) => {
        console.log(response.data);

        window.location.href = "/login";
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/";
      });
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="nav-header">
        <Container>
          <Nav className="me-auto">
            <Link to={"/"}>Home</Link>
            <Link to={"/upcoming"}>Upcoming Events</Link>
            <Link to={"/past"}>Past Events</Link>
            <Link to={"/stats"}>Stats</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/register"}>Register</Link>
            {!axios.defaults.withCredentials ? (
              <Link to={"/login"}>Login</Link>
            ) : (
              <Link
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
