import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetSubjects } from "../../../redux/slices/study.js";
import dfv from "../../../";
const Subjects = () => {
  const dispatch = useDispatch();

  const { subjects } = useSelector((state) => state.study);

  React.useEffect(() => {
    dispatch(fetchGetSubjects());
  }, []);

  console.log(subjects && subjects);

  const colors = ['#3366CC', '#DC3912', '#FF9900', '#109618']

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "white",
        }}
      >
        <br />
        <Container>
          <h3>Барлық сабақтар</h3>
          <br />
          <Card className="static-card profile-access-denied-card">
            <Card.Body>
              <Row>
                {subjects?.items.map((subject, i) => (
                  <Col md={3} className="d-flex column justify-content-center" style={{margin: '24px 0'}}>
                    <Button
                      className="btn btn-primary subject-btn-card"
                      style={{
                        border: '1px solid #004485',
                        borderRadius: '1px',
                        padding: '0',
                        height: "300px",
                        width: "220px",
                        color: "white",
                        background: `url(http://localhost:5000${
                          subject && subject.img
                        })`,
                        backgroundSize: "cover",
                      }}
                      onClick={() => window.location.assign('http://localhost:3000/all-subjects/' + subject?._id + '/all-chapters') }
                    >
                      <p style={{
                        margin: '0',
                        padding: '12px 0',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: '600',
                        backgroundColor: colors[i]
                      }}>{subject?.name}</p>
                    </Button>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Subjects;
