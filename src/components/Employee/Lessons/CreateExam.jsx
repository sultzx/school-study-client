import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CreateExam = () => {

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
              ></textarea>
            </Col>
            <Col lg={12} xs={12}>
                    <hr />
                    <br />
                </Col>
                <Col lg={12} xs={12} className="d-flex column justify-content-end">
                    <Button className="btn btn-primary signup shadow-sm">Экзамен сұрағын құру</Button>
                </Col>
          </Row>
        </Card.Body>
      </Card>
    </>)
}

export default CreateExam