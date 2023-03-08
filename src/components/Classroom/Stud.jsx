import { Container, Row, Col, Card } from "react-bootstrap";
import { Person, Telephone, EnvelopePaper } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  fetchGetAllStudents,
  fetchSetStudentClassroom,
} from "../../redux/slices/all_students.js";

import alt from "../../images/alt.png";

const Stud = ({
  classroom_id,
  id,
  lastname,
  firstname,
  patronymic,
  phone,
  email,
  avatar,
}) => {
  const dispatch = useDispatch();

  const setStatus = async () => {
    const data = await dispatch(
      fetchSetStudentClassroom({
        classroomId: classroom_id,
        studentId: id,
      })
    );
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    //   window.location.assign(`http://localhost:3000/classrooms/${classroom_id}`)
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
        style={{ height: "630px" }}
      >
        <Card.Body className="d-flex row">
          <div className="d-flex">
            <img
              className="img-fluid cover flex-fill"
              style={{
                border: "1px solid #004485",
                borderRadius: "12.5px",
                width: "auto",
                height: "290px",
              }}
              src={avatar ? avatar : alt}
              alt=""
            />
          </div>

          <div style={{height: '180px'}}>
            <h5 style={{ margin: "16px 0" }}>
              <Person size={"22px"} color="#00509d" /> &nbsp;
              {lastname} {firstname} {patronymic}
            </h5>
            {phone && (
              <h5 style={{ margin: "16px 0" }}>
                <Telephone size={"22px"} color="#00509d" /> &nbsp;
                {phone}{" "}
              </h5>
            )}
            {email && (
              <h5 style={{ margin: "16px 0" }}>
                <EnvelopePaper size={"22px"} color="#00509d" /> &nbsp;
                {email}{" "}
              </h5>
            )}
          </div>

          <hr />
          <div className="text-end">
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

export default Stud;
