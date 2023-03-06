import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logout } from "../redux/slices/student.js";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const studentData = useSelector((state) => state.student.data);

  console.log(studentData && studentData);

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

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
              {isAuth ? (
                <>
                {studentData && studentData && <Nav.Link href="/student-profile">
                  {studentData.lastname} {studentData.firstname}
                  </Nav.Link>}
                  
                  <Nav.Link
                    eventKey={2}
                    onClick={() => onClickLogout()}
                    className="btn btn-primary signup shadow"
                  >
                    Шығу
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/for-student">Oқушы</Nav.Link>
                  <Nav.Link
                    eventKey={2}
                    href="/for-employee"
                  >
                    Қызметкер
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
