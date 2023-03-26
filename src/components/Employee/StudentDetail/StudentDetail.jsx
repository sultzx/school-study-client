import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetAllStudents } from "../../../redux/slices/all_students";
import { fetchAllExamAnswers, fetchAllQuizAnswers, fetchGetExamQuestions } from "../../../redux/slices/study";
import ExamOne from "./ExamOne.jsx";

const StudentDetail = () => {
  const dispatch = useDispatch();

  const { student_id } = useParams();

  const userData = useSelector((state) => state.user.data);

  const { students } = useSelector((state) => state.student);

  const { quiz_answers, exam_answers, exam } = useSelector((state) => state.study);

  React.useEffect( async ()  => {
    await dispatch(fetchGetExamQuestions())
    await dispatch(fetchAllQuizAnswers());
    await dispatch(fetchAllExamAnswers());
   await dispatch(fetchGetAllStudents());
  }, []);

  const student = [];

  const sortedQuizAnswers = [];

  quiz_answers?.items?.forEach((quiz_answer, i) => {
    if (quiz_answer?.student?._id == student_id) {
      sortedQuizAnswers.push(quiz_answer);
    }
  });

  students?.items?.forEach((stud, i) => {
    if (stud?._id == student_id) {
      student.push(stud);
    }
  });

  const attending = () => {
    switch (userData?.subject?.name) {
      case "Қазақстан тарихы":
        return student && student[0]?.subjects?.history?.attending?.length;
      case "Қазақ тілі":
        return student && student[0]?.subjects?.kazakh?.attending?.length;
      case "Математика":
        return student && student[0]?.subjects?.math?.attending?.length;
      case "English":
        return student && student[0]?.subjects?.english?.attending?.length;
    }
  };

  console.log(sortedQuizAnswers && sortedQuizAnswers);

  const quizGrade = () => {
    switch (userData?.subject?.name) {
      case "Қазақстан тарихы":
        let index = 1;
        let correct = 1;
        sortedQuizAnswers?.forEach((quiza, i) => {
          if (quiza?.subject?._id == "640644c85665304b307c91b3") {
            if (quiza?.correct == 1) {
              correct++;
            }
            index++;
          }
        });
        return {
          all: index,
          correct: correct,
        };
      case "Қазақ тілі":
        let kazindex = 1;
        let kazcorrect = 1;
        sortedQuizAnswers?.forEach((quiza, i) => {
          if (quiza?.subject?._id == "640644875665304b307c91af") {
            if (quiza?.correct == 1) {
                kazcorrect++;
            }
            kazindex++;
          }
        });
        return {
          all: kazindex,
          correct: kazcorrect,
        };
      case "Математика":
        let mathindex = 1;
        let mathcorrect = 1;
        sortedQuizAnswers?.forEach((quiza, i) => {
          if (quiza?.subject?._id == "640644b15665304b307c91b1") {
            if (quiza?.correct == 1) {
                mathcorrect++;
            }
            mathindex++;
          }
        });
        return {
          all: mathindex,
          correct: mathcorrect,
        };
      case "Ағылшын":
        let engindex = 1;
        let engcorrect = 1;
        sortedQuizAnswers?.forEach((quiza, i) => {
          if (quiza?.subject?._id == "640644de5665304b307c91b5") {
            if (quiza?.correct == 1) {
                mathcorrect++;
            }
            engindex++;
          }
        });
        return {
          all: engindex,
          correct: engcorrect
        };
    }
  };


  console.log('exam_answers', exam_answers && exam_answers)

  return (
    <>
      <Container
        fluid
        style={{
          background: "white",
        }}
      >
        <Container>
          <br />
          <h3>Оқушының жеке парақшасы</h3>
          <br />
          <Card className="static-card profile-access-denied-card">
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    className="img-fluid flex-fill cover"
                    style={{
                      border: "1px solid #004485",
                      borderRadius: "6px",
                      padding: "4px",
                    }}
                    src={`http://localhost:5000${student[0]?.avatar}`}
                    alt=""
                  />
                </Col>
                <Col md={9}>
                  <h4>
                    {student[0]?.lastname} {student[0]?.firstname}{" "}
                    {student[0]?.patronymic}
                  </h4>
                  <h5>
                    {student[0]?.classroom?.name} {student[0]?.classroom?.abcd}{" "}
                    сынып оқушысы
                  </h5>
                  <h6>Поштасы: {student[0]?.email}</h6>
                  <h6>Телефон нөмірі: {student[0]?.phone}</h6>
                  <h6>Мекенжайы: {student[0]?.address}</h6>
                  <hr />
                  <h6>Қатысқан сабақ саны: {attending()}</h6>

                  <hr />
                  <h5>
                    Оқушының тест тапсыру көрсеткіші: {quizGrade()?.all}{" "}
                    сұрақтан {quizGrade()?.correct} дұрыс
                  </h5>
                  <h5>
                    Тестілеу бал көрсеткіші:{" "}
                    {quizGrade()?.all > 1 ?  `${(quizGrade()?.correct * 100) / quizGrade()?.all} балл` : `0`}
                    
                  </h5>
                </Col>
              </Row>
              <hr />
              <Row>
                { exam_answers?.items?.map((ex, i) => (
                    ex?.student?._id == student_id &&
                    <Col key={i} md={12}>
                    <p style={{ fontSize: "18px" }}>
                      {i + 1}. {
                      exam?.items?.map((examquestion, i) => (
                        ex?.exam?._id == examquestion?._id && examquestion.question
                      ))
                      }
                    </p>
                      <ExamOne subject_id={userData?.subject?._id} exam_answer={ex}/>
                    <br />
                    <hr />
                  </Col>
                ))
                } 
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

export default StudentDetail;
