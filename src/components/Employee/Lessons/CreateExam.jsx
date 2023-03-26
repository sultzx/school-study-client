import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCreateExamQuestion } from "../../../redux/slices/study";

const CreateExam = ({class_id, chapter_id, lesson_id}) => {

  const dispatch = useDispatch()

  const [examQuestion, setExamQuestion] = React.useState()

  const createExam = () => {
    dispatch(fetchCreateExamQuestion({
      question: examQuestion,
      class_id, chapter_id, lesson_id
    }))
  }

    return (<>
        <br />
        <Card className="static-card profile-access-denied-card">
        <Card.Body>
          <Row>
            <h5 style={{ color: "#004485" }}>Осы сабақ бойынша экзамен cұрағын құру</h5>
            <Col className="col-12">
              <hr />
            </Col>
            <Col
              lg={12}
              xs={12}
              className="d-flex column"
              style={{ margin: "12px 0" }}
            >
              <textarea
              
                rows="4"
                className="flex-fill form-control"
                placeholder="Сұрақ мәтінін жазыңыз"
                onChange={event => setExamQuestion(event.target.value) }
              ></textarea>
            </Col>
            <Col lg={12} xs={12}>
                    <hr />
                    <br />
                </Col>
                <Col lg={12} xs={12} className="d-flex column justify-content-end">
                    <Button 
                    onClick={() => createExam()}
                    className="btn btn-primary signup shadow-sm">Экзамен сұрағын құру</Button>
                </Col>
          </Row>
        </Card.Body>
      </Card>
    </>)
}

export default CreateExam