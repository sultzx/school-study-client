import React from "react";
import {
  Tab,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
  Tabs,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import ProfileDetail from "../components/profileDetail.jsx";
import Rating from "../components/rating.jsx";
import girl_adenied from "../images/girl_adenied.png";
import { fetchUpdateMe, selectIsAuth } from "../redux/slices/auth.js";

const Profile = () => {
  const isAuth = useSelector(selectIsAuth);

  const isStatus = true;

  const userData = {
    lastname: "Жумагалиев",
    firstname: "Султангали",
    patronymic: "Қайсарұлы",
    phone: "87765111441",
    address: "Ержанова, 43",
    birthday: "27-02-1998",
    father_lname: "Утембетов",
    father_fname: "Қайсар",
    father_patron: "Жумагалиевич",
    father_phone: "87011651898",
    mother_lname: "Тулепова",
    mother_fname: "Кулнар",
    mother_patron: "Абекеновна",
    mother_phone: "87011651949",
    classroom: "10",
    abcd: "А",
  };

  if (isAuth) {
    return <Navigate to="/login" />;
  }

  if (!isStatus) {
    return (
      <>
        <Container fluid className="profile-page-container">
          <br />
          <Container>
            <h3>Жеке профиль</h3>
            <br />
            <Row>
              <Col lg={12} xs={12}>
                <Card className="static-card profile-access-denied-card">
                  <Card.Body>
                    <Row>
                      <Col className="d-flex row align-items-center">
                        <h4>
                          Әзірге Сізге жеке профилге рұқсат жоқ. Сіздің тіркелу
                          барысында енгізген жеке ақпаратыңыз модерацияда.
                          Тексерілу уақыты ~15 мин. Өтінеміз, күтіңіз
                        </h4>
                      </Col>
                      <Col className="d-flex row align-items-center justify-content-center">
                        <img
                          src={girl_adenied}
                          className="img-fluid cover flex-fill"
                          alt=""
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }

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
                      Жұмағалиев Сұлтанғали Қайсарұлы
                    </h4>
                    <Button className="btn btn-primary edit-profile-btn">
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
                            Оқушы профилі
                          </Nav.Link>
                        </Nav.Item>
                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            eventKey="rating"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Рейтинг
                          </Nav.Link>
                        </Nav.Item>
                        <hr style={{ margin: "0px" }} />
                        <Nav.Item>
                          <Nav.Link
                            className="btn btn-primary outlined-btn p-link-btn"
                            eventKey="calendar"
                            style={{
                              padding: "6px",
                              margin: "0",
                              color: "#00509D",
                              background: "transparent",
                            }}
                          >
                            Күнтізбе
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
                            Барлық сабақтар
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
                            Мұғалімге сұрақ
                          </Nav.Link>
                        </Nav.Item>
                        <hr style={{ margin: "0px" }} />
                      </Nav>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ marginTop: "20px" }}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <ProfileDetail
                    lastname={userData && userData.lastname}
                    firstname={userData && userData.firstname}
                    patronymic={userData && userData.patronymic}
                    phone={userData && userData.phone}
                    address={userData && userData.address}
                    birthday={userData && userData.birthday}
                    father_lname={userData && userData.father_lname}
                    father_fname={userData && userData.father_fname}
                    father_patron={userData && userData.father_patron}
                    father_phone={userData && userData.father_phone}
                    mother_lname={userData && userData.mother_lname}
                    mother_fname={userData && userData.mother_fname}
                    mother_patron={userData && userData.mother_patron}
                    mother_phone={userData && userData.mother_phone}
                    classroom={userData && userData.classroom}
                    abcd={userData && userData.abcd}
                  />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="rating">
                  <Rating />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="calendar">Calendar panel</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default Profile;
