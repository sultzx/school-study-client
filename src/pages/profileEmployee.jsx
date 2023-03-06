import React from "react";
import {
  Tab,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "react-phone-number-input/style.css";
import { fetchAuthMe } from "../redux/slices/user.js"

import ProfileDetail from "../components/Employee/profileDetail.jsx";
import girl_adenied from "../images/girl_adenied.png";
import Classrooms from "../components/Classroom/Classrooms.jsx";

const Profile = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const userData = useSelector((state) => state.user.data);

  const isStatus = userData && userData.status != "accepted";

  console.log(userData && userData)

  return (
    <Container fluid className="profile-page-container">
      <br />
      <Container>
        <Tab.Container defaultActiveKey={"profile"}>
          <h3>Жеке профиль</h3>
          <Row>
            <Col lg={4} xs={12} style={{ marginTop: "20px" }}>
              <Card
                className="static-card profile-access-denied-card"
                style={{
                  paddingTop: "20px",
                }}
              >
                <Card.Body>
                  <Row className="d-flex row align-items-start justify-content-center">
                    <img
                      src={girl_adenied}
                      className="flex-fill img-fluid profile-avatar-img"
                      alt=""
                    />
                    <h4 className="text-center" style={{ marginTop: "24px" }}>
                      {userData && userData.lastname}&nbsp;
                      {userData && userData.firstname}
                      &nbsp; {userData && userData.patronymic}
                    </h4>
                    <Button
                      className="btn btn-primary edit-profile-btn"
                      href="/edit-employee-profile"
                    >
                      Профильді өңдеу
                    </Button>
                    <div className="text-center">
                      <Nav variant="pills" className="flex-column">
                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            eventKey="profile"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Жеке ақпарат
                          </Nav.Link>
                        </Nav.Item>

                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            href="/classrooms"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Сыныптар
                          </Nav.Link>
                        </Nav.Item>

                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Сабақтар
                          </Nav.Link>
                        </Nav.Item>

                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Тесттер
                          </Nav.Link>
                        </Nav.Item>

                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Емтихан
                          </Nav.Link>
                        </Nav.Item>
                        <hr style={{ margin: "0px" }} />
                      </Nav>
                    </div>
                  </Row>
                  
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <ProfileDetail
                    lastname={userData && userData.lastname}
                    firstname={userData && userData.firstname}
                    patronymic={userData && userData.patronymic}
                    phone={userData && userData.phone}
                    classrooms={userData && userData.classrooms}
                    subject={userData && userData.subject.name}
                  />
                  <br />
                </Tab.Pane>
                {/* <Tab.Pane eventKey="classrooms">
                  <Classrooms/>
                  <br />
                </Tab.Pane> */}
                <Tab.Pane eventKey="calendar">
                  <br />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default Profile;
