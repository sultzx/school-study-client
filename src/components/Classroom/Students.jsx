import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Person,
  Telephone,
  PinMap,
  Calendar2X,
  Bank2,
  Bank,
  Pin,
  EnvelopePaper,
  Bookmark,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  fetchGetAllStudents,
  fetchSetStudentClassroom,
} from "../../redux/slices/all_students.js";

import altImg from "../../images/alt.png";
import React from "react";

const Students = ({
  classroom_id,
  id,
  lastname,
  firstname,
  patronymic,
  phone,
  email,
  classroom,
  status,
  avatar,
}) => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = React.useState()

  const setStatus = async () => {
    const data = await dispatch(
      fetchSetStudentClassroom({
        classroomId: classroom_id,
        studentId: id,
      })
    );

    console.log(data && data.payload)

    if (data && data.payload.success) {

        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);
          }

         window.location.assign(`http://localhost:3000/classrooms/${classroom_id}`);

    } else {
            window.alert(data && data.payload.message)
    }
    
     };

  return (
    <Col
      lg={4}
      xs={12}
      style={{
        margin: "12px 0",
      }}
    >
      <Card
        className="static-card profile-access-denied-card"
        style={{ height: "800px" }}
      >
        <Card.Body className="d-flex row ">
          <div className="d-flex">
            <img
              className="img-fluid cover flex-fill"
              style={{
                border: "1px solid #004485",
                borderRadius: "12.5px",
                width: "auto",
                height: "290px",
              }}
              src={avatar ? avatar : altImg}
              alt=""
            />
          </div>
          <br />
          <h5 style={{ margin: "16px 0" }}>
            <Person size={"22px"} color="#00509d" /> &nbsp;
            {lastname} {firstname} {patronymic}
          </h5>
          <h5 style={{ margin: "16px 0" }}>
            <Telephone size={"22px"} color="#00509d" /> &nbsp;
            {phone ? phone : 'Телефон енгізілмеген'}{" "}
          </h5>
          <h5 style={{ margin: "16px 0" }}>
            <EnvelopePaper size={"22px"} color="#00509d" /> &nbsp;
            {email ? email : 'Пошта енгізілмеген'}{" "}
          </h5>
          <hr />
          <h5 style={{ margin: "16px 0" }}>
            <Bookmark size={"22px"} color="#00509d" /> &nbsp;
            {classroom
              ? `${classroom.name}${classroom.abcd} сынып оқушысы`
              : "Сынып таңдалмаған"}
          </h5>
          <hr />
          <div className="text-end">
            <br />
            <button
              className="btn btn-primary signup shadow"
              onClick={setStatus}
            >
              Сыныпқа қосу
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Students;
