import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movie</Link>
            <Link to="/tv">Tv show</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
