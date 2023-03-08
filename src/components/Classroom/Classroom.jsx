import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Trash, BoxSeam } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRemoveClassroom } from "../../redux/slices/study";
import { fetchAuthMe } from "../../redux/slices/user";

const Classroom = ({ id, name, abcd }) => {


    const dispatch = useDispatch()

    const deleteClassroom = () => {
        if (window.confirm(`${name}${abcd} сыныбын өшіресіз бе?`))
        dispatch(fetchRemoveClassroom(id))
    }

  return (
    <Col lg={2} xs={12} >
      <Card className="static-card profile-access-denied-card" style={{padding: '4px', margin: '12px 0'}}>
        <Card.Body className="text-center d-flex row align-items-center justify-content-center">
          <h1>
            {name} {abcd}
          </h1>
          <h5>сыныбы</h5>
          <hr />
          <Row>
            <Col className="col-6"><BoxSeam size={'24px'} 
            onClick={() => {window.location.assign(`http://localhost:3000/classrooms/${id}`)}} color="#00509d"/></Col>
            <Col className="col-6"><Trash size={'24px'}
            onClick={deleteClassroom}
            color="#00509d"/></Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Classroom;
