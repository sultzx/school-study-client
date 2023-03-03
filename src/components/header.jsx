import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link className="link" to={"/"}>
            <Navbar.Brand style={{ color: "#00509D" }}>
              School study
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/news">Жаңалықтар</Nav.Link>

              <Nav.Link href="/contact">Байланыс</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Кіру</Nav.Link>
              <Nav.Link eventKey={2} href="/registration" className="btn btn-primary signup shadow">
                Тіркелу
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
