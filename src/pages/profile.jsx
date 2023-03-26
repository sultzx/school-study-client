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
import { fetchAuthMe } from "../redux/slices/user.js";

import ProfileDetail from "../components/Student/profileDetail.jsx";
import Rating from "../components/Student/rating.jsx";
import Calendar from "../components/Student/calendar.jsx";
import AskTeacher from "../components/Student/askTeacher.jsx";

import girl_adenied from "../images/girl_adenied.png";
import alt from "../images/altimg.png";
import axios from "../axios.js";


const Profile = () => {
  const inputFileRef = React.useRef(null);

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchAuthMe())
  // }, [])

  const userData = useSelector((state) => state.user.data);

  console.log("userData", userData && userData);

  const isStatus = userData && userData.status == "access";

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/api/upload/student-avatar", formData);
      console.log(data.url);
      console.log("asdasd");
    } catch (error) {
      console.warn(error);
      alert("Бейнені көшіру кезінде қате шықты");
    }
    dispatch(fetchAuthMe());
  };

  const dataA = [
    ["Pac Man", "Percentage"],
    ["Қазақ тілі", 35],
    ["Математика", 25],
    ["Қазақстан тарихы", 15],
    ["Ағылшын тілі", 10],
  ];

  const dataB = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#407CB6"], // RGB value
    ["Silver", 10.49, "#407CB6"], // English color name
    ["Gold", 19.3, "#407CB6"],
    ["Platinum", 21.45, "#407CB6"], // CSS-style declaration
  ];

  const dataC = [
    [
      "Жалпы көрсеткіш",
      "Қазақ тілі",
      "Математика",
      "Қазақстан тарихы",
      "Ағылшын тілі",
    ],
    ["I тоқсан", 92, 86, 97, 96],
    ["II тоқсан", 85, 75, 84, 80],
    ["III тоқсан", 75, 87, 85, 76],
    ["IV тоқсан", 92, 92, 98, 67],
  ];

  const dataD = [
    ["", "Қазақ тілі", "Математика", "Қазақстан тарихы", "Ағылшын тілі"],
    ["Ақпан", 92, 86, 97, 96],
  ];

  const options = {
    legend: "none",

    pieStartAngle: 0,
    slices: {},
  };
  const optionsB = {
    legend: "none",
  };
  const optionsC = {
    legend: { position: "bottom" },
  };

  const optionsD = {
    legend: { position: "bottom" },

    bars: "horizontal",
  };

  console.log(userData && userData);

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
            <br />
          </Container>
        </Container>
      </>
    );
  }

  return (
    <Container fluid className="profile-page-container">
      <br />
      <Container>
        <Tab.Container defaultActiveKey={"rating"}>
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
                      style={{ height: "300px", padding: "8px" }}
                      onClick={() => inputFileRef.current.click()}
                      src={
                        userData && userData.avatar
                          ? `http://localhost:5000${
                              userData && userData.avatar
                            }`
                          : alt
                      }
                      className=" profile-avatar-img"
                      alt=""
                    />
                    <input
                      type="file"
                      onChange={handleChangeFile}
                      hidden
                      ref={inputFileRef}
                    />
                    <h4 className="text-center" style={{ marginTop: "24px" }}>
                      {userData && userData.lastname}&nbsp;
                      {userData && userData.firstname}
                      &nbsp; {userData && userData.patronymic}
                    </h4>
                    <Button
                      className="btn btn-primary edit-profile-btn"
                      href="/edit-student-profile"
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
                            href="/all-subjects"
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
                            href="/pass-quiz"
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
                           href="/pass-exam"
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
                            eventKey="ask"
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
                    email={userData && userData.email}
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
                  />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="rating">
                  <Rating />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="calendar">
                  <Calendar />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="subjects">
                  <Calendar />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="subjects">
                  <Calendar />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="subjects">
                  <Calendar />
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="ask">
                  < AskTeacher/>
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
