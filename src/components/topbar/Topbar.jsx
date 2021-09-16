import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            Muhammad.ufo{" "}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+98 9371700671</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Shadow.m.s.313@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
