import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetChapters } from "../../../redux/slices/study.js";
import Chapter from "./Chapter.jsx";

const Chapters = () => {

  const { id } = useParams()

 console.log(id)

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);

  const { chapters } = useSelector((state) => state.study);

  React.useEffect(() => {
    dispatch(fetchGetChapters());
  }, []);

  return (
    <>
      <Container fluid style={{ background: "white" }}>
        <br />
        <Container>
        <h3>Бөлімдер</h3>
            <br />
          <Card className="static-card profile-access-denied-card">
            <Card.Body>
              <Row>
                <Col lg={12}>
                  <h4>{userData && userData.subject.name}&nbsp;•&nbsp;{id} - сынып</h4>
                  <hr />
                </Col>
                {chapters &&
                  chapters.items &&
                  chapters.items.map((chap, i) => (
                    chap.class == id &&
                    <Chapter
                      key={i}
                      id={chap && chap._id}
                      name={chap && chap.name}
                      clss={chap && chap.class}
                      img={chap && chap.img}
                    />
                  ))}
                <Col lg={12}>
                  <hr />
                  <br />
                </Col>
                <Col lg={12} className="d-flex column justify-content-end">
                  <hr />
                  <Button
                    href={`http://localhost:3000/class/${id}/create-chapter`}
                    className="btn btn-primary signup shadow">
                    Жаңа бөлім құру
                  </Button>
                </Col>
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

export default Chapters;
