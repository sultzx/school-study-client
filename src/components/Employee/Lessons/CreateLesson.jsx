import React, { useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Chapter from "./Chapter.jsx";
import { fetchCreateLesson, fetchGetChapters } from "../../../redux/slices/study.js";
import axios from "../../../axios.js";
import { fetchAuthMe } from "../../../redux/slices/user.js";

const CreateLesson = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);

  console.log(userData && userData.subject && userData.subject._id)

  const { chapters } = useSelector((state) => state.study);

  const [chapter, setChapter] = React.useState()

  const [lessonImg, setLessonImg] = React.useState()

  const [title, setTitle] = React.useState()

  const [text, setText] = React.useState()

  const inputFileRef = useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/api/upload/lesson-img", formData);
      console.log(data.url);

      setLessonImg(data.url);
    } catch (error) {
      console.warn(error);
      alert("Бейнені көшіру кезінде қате шықты");
    }
    dispatch(fetchAuthMe());
  };

  React.useEffect(() => {
    dispatch(fetchGetChapters());
  }, []);

  const chaptersOptions = [
    {
      value: 0,
      text: "Пән бөлімін таңдаңыз",
    },
  ];

  chapters &&
    chapters.items &&
    chapters.items.forEach((item, i) => {
      chaptersOptions.push({
        value: item && item._id,
        text: item && item.name,
      });
    });

  console.log("sad", chapter && chapter);

  const createLesson = () => {
    dispatch(fetchCreateLesson({
        chapter: chapter && chapter,
        title: title && title,
        text: text && text,
        img: lessonImg && lessonImg,
        subject: userData && userData.subject && userData.subject._id
    }))
    window.location.assign('http://localhost:3000/employee-profile')
  }

  return (
    <>
      <Container fluid style={{ background: "white" }}>
        <br />
        <Container>
          <h3>Сабақты құру</h3>
          <br />
          <Card className="static-card profile-access-denied-card">
            <Card.Body>
              <Row>
                <select
                  selected={chapter}
                  onChange={(event) => setChapter(event.target.value)}
                  className="form-control-input flex-fill form-select select-input"
                >
                  {chaptersOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                <Col lg={4} className="">
                    
                    <input 
                        placeholder="Сабақ тақырыбын жазыңыз"
                        style={{margin: '24px 0'}} type="text" className="form-control " />
                </Col>
                <Col lg={4} className="d-flex row">
                    
                    <textarea 
                    rows={8}
                        placeholder="Сабақ мәтінін толтырыңыз"
                        style={{margin: '24px 0'}} type="text" className="form-control flex-fill" />
                </Col>
                <Col lg={4} className="d-flex column justify-content-center">
                <img
                    className="flex-fill img-fluid cover d-flex row justify-content-center align-items-center"
                    src={lessonImg && lessonImg && `http://localhost:5000${lessonImg && lessonImg}`}
                    style={{
                      border: "1px solid #00509d",
                      borderRadius: "12.5px",
                      height: "300px",
                      margin: "24px 0"
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
                <Col lg={12} className="d-flex column justify-content-end">
                <Button className="btn btn-primary outlined-btn " 
                    onClick={() => window.location.assign('http://localhost:3000/all-lessons')}>
                        Барлық сабақтар
                    </Button>
                    <Button className="btn btn-primary signup shadow" onClick={() => createLesson()}>
                        Орындау
                    </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <br />
        <br />
      </Container>
    </>
  );
};

export default CreateLesson;
