/* eslint-disable react/prop-types */
import "./styles/navPrincipal.css";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

function NavPrincipal(props) {
  return (
    <>
      <div className="nav-principal">
        <Link
          to={
            props.titulo == "Home"
              ? "/contact"
              : props.titulo == "Contact"
              ? "/stats"
              : props.titulo == "Stats"
              ? "/past"
              : props.titulo == "Past Events"
              ? "/upcoming"
              : "/"
          }
        >
          <ArrowLeftIcon sx={{ fontSize: 60, color: green[300] }} />
        </Link>
        <h2>{props.titulo}</h2>

        <Link
          to={
            props.titulo == "Home"
              ? "/upcoming"
              : props.titulo == "Upcoming Events"
              ? "/past"
              : props.titulo == "Past Events"
              ? "/stats"
              : props.titulo == "Stats"
              ? "/contact"
              : "/"
          }
        >
          <ArrowRightIcon sx={{ fontSize: 60, color: green[300] }} />
        </Link>
      </div>
    </>
  );
}

export default NavPrincipal;
