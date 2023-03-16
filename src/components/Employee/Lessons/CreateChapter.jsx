import React from "react";
import { useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateChapter } from "../../../redux/slices/study";
import axios from "../../../axios.js";
import { fetchAuthMe } from "../../../redux/slices/user";
import { useParams } from "react-router-dom";

const CreateChapter = () => {
  const dispatch = useDispatch();

  const { id } = useParams()

  const userData = useSelector((state) => state.user.data);

  const [chapter, setChapter] = React.useState();

  const [img, setImg] = React.useState();

  const inputFileRef = useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/api/upload/chapter-img", formData);
      console.log(data.url);

      setImg(data.url);
    } catch (error) {
      console.warn(error);
      alert("Бейнені көшіру кезінде қате шықты");
    }
    dispatch(fetchAuthMe());
  };

  const createChapter = () => {
    dispatch(fetchCreateChapter({
        name: chapter && chapter,
        clss: id,
        img: img && img
    }));
    window.location.assign(`http://localhost:3000/class/${id}/all-chapters`)
  };

  return (
    <>
      <Container fluid style={{ background: "white" }}>
        <br />
        <Container>
          <h3>Пән бөлімін құру</h3>
          <br />
          <Card className="static-card profile-access-denied-card">
            <Card.Body>

              <Row>
                <Col lg={12}>
                  <h4>{userData && userData.subject.name}</h4>
                  <hr />
                </Col>
                <Col lg={8}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Пән бөлімінің атауын жазыңыз"
                    onChange={(event) => setChapter(event.target.value)}
                  />
                </Col>
                <Col lg={4} className="d-flex column justify-content-center">
                  <img
                    className="flex-fill img-fluid cover d-flex row justify-content-center align-items-center"
                    src={img && img && `http://localhost:5000${img && img}`}
                    style={{
                      border: "1px solid #00509d",
                      borderRadius: "12.5px",
                      height: "300px",
                    }}
                    onClick={() => inputFileRef.current.click()}
                    alt="Сүретті таңдау үшін үстін басыңыз"
                  />
                  <input
                    hidden
                    className="form-control"
                    onChange={handleChangeFile}
                    ref={inputFileRef}
                    type="file"
                  />
                </Col>

                <Col
                  lg={12}
                  style={{
                    marginTop: "24px",
                  }}
                  className="d-flex column justify-content-end"
                >
                    <Button
                    style={{
                        margin: '0'
                    }}
                    onClick={() => {
                      window.location.assign('http://localhost:3000/employee-profile')
                    }}
                    className="btn btn-primary outlined-btn"
                  >
                    Артқа қайту
                  </Button>
                    <Button
                    style={{
                        margin: '0',
                        background: 'transparent',
                        color: '#00509d'
                    }}
                    onClick={() => {
                      window.location.assign('http://localhost:3000/create-lesson')
                    }}
                    className="btn btn-primary signup shadow-sm"
                  >
                    Пән бөлімдері
                  </Button>
                  <Button
                    disabled={!img}
                    onClick={() => {
                      createChapter();
                    }}
                    className="btn btn-primary signup shadow-sm"
                  >
                    Бөлім құру
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

export default CreateChapter;
