import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { AppName } from '../../constantes';
function MenuBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"> <img
              alt=""
              src="https://99roberto.github.io/fly_well/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
        <Navbar.Brand href="#">{AppName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Link to={`/`} className="btn">Home</Link>
            <Link to={`/question`} className="btn">Questionário</Link>
            <Link to={`/TermosUso`} className="btn">Termos de uso</Link>
            <Link to={`/PoliticaPricacidade`} className="btn">Política de Privacidade</Link>
          a
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;

 