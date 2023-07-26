import "./styles/navFooter.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { green } from "@mui/material/colors";

const NavFooter = () => {
  return (
    <>
      <nav className="nav-footer">
        <a href="#instagram">
          <FacebookIcon sx={{ fontSize: 30, color: green[300] }} />
        </a>
        <a href="#facebook">
          <InstagramIcon sx={{ fontSize: 30, color: green[300] }} />
        </a>
        <a href="#whatsapp">
          <WhatsAppIcon sx={{ fontSize: 30, color: green[300] }} />
        </a>
        <h4>Cohort</h4>
      </nav>
    </>
  );
};

export default NavFooter;
