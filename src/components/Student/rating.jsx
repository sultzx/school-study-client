import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Person, Telephone, PinMap, Calendar2X } from "react-bootstrap-icons";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllClassroom,
  fetchAllExamAnswers,
  fetchGetLessons,
  fetchGetSubjects,
} from "../../redux/slices/study";

const Rating = () => {
  const dispatch = useDispatch();

  const [chartWidth, setChartWidth] = React.useState("100%");

  const userData = useSelector((state) => state.user.data);

  const { subjects, lessons, exam_answers } = useSelector((state) => state.study);

  React.useEffect(() => {
    dispatch(fetchGetSubjects());
    dispatch(fetchGetLessons());
    dispatch(fetchAllExamAnswers())
  }, []);

  let sortedSubjects = {
    kazakh: [],
    math: [],
    history: [],
    english: [],
  };

  if (lessons) {
    lessons?.items.forEach((lesson, i) => {
      console.log(lesson);
      if (lesson.clss == userData?.classroom?.name) {
        switch (lesson.subject?.name) {
          case "Қазақ тілі":
            sortedSubjects.kazakh.push(lesson);
            break;
          case "Математика":
            sortedSubjects.math.push(lesson);
            break;
          case "Қазақстан тарихы":
            sortedSubjects.history.push(lesson);
            break;
          case "Ағылшын":
            sortedSubjects.english.push(lesson);
            break;
        }
      }
    });
  }

  console.log(sortedSubjects?.kazakh);

  const dataA = [
    ["Барлық сабақтар", "Percentage"],
    ["Қазақ тілі", sortedSubjects?.kazakh.length],
    ["Математика", sortedSubjects?.math.length],
    ["Қазақстан тарихы", sortedSubjects?.history.length],
    ["Ағылшын тілі", sortedSubjects?.english.length],
  ];

  const dataB = [
    ["Пән", "Өтілген сабақтар", { role: "style" }],
    ["Қазақ тілі",userData?.subjects?.kazakh?.attending?.length, "#407CB6"], 
    ["Математика", userData?.subjects?.math?.attending?.length, "#407CB6"], 
    [
      "Қазақстан тарихы",
      userData?.subjects?.history?.attending?.length,
      "#407CB6",
    ],
    ["Ағылшын", userData?.subjects?.english?.attending?.length, "#407CB6"], 
  ];

  const sortedExamAnswers = {
     history_grades: [],
     kazakh_grades: [],
     math_grades: [],
     english_grades: []
  }

  exam_answers?.items?.forEach((ex, i) => {
    if (ex.student?._id == userData?._id) {
      console.log(ex?.subject?.name)
      switch(ex?.subject?.name) {
        case 'Қазақстан тарихы':
          sortedExamAnswers.history_grades.push(ex?.grade)
        break;
        case 'Қазақ тілі':
          sortedExamAnswers.kazakh_grades.push(ex?.grade)
        break;
        case 'Математика':
          sortedExamAnswers.math_grades.push(ex?.grade)
        break;
        case 'Ағылшын':
          sortedExamAnswers.english_grades.push(ex?.grade)
        break;
      }
    }
  })

  const dataC = [
    [
      "Жалпы көрсеткіш",
      "Қазақ тілі",
      "Математика",
      "Қазақстан тарихы",
      "Ағылшын тілі",
    ],
    ["I тоқсан", 0, 0, 0, 0],
    ["II тоқсан", 0, 0, 0, 0],
    ["III тоқсан", 0, 0,  0, 0],
    ["IV тоқсан", 
    (sortedExamAnswers?.kazakh_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.kazakh_grades.length, 
    (sortedExamAnswers?.math_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.math_grades.length, 
    (sortedExamAnswers?.history_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.history_grades.length, 
    (sortedExamAnswers?.english_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.english_grades.length ],
  ];

  

  const dataD = [
    ["", "Қазақ тілі", "Математика", "Қазақстан тарихы", "Ағылшын тілі"],
    ["Ақпан",
    (sortedExamAnswers?.kazakh_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.kazakh_grades.length, 
    (sortedExamAnswers?.math_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.math_grades.length,
    (sortedExamAnswers?.history_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.history_grades.length, 
    (sortedExamAnswers?.english_grades.reduce((a, b) => a + b, 0)) / sortedExamAnswers?.english_grades.length],
  ];

  const options = {
    legend: "none",

    pieStartAngle: 0,
    slices: {},
  };
  const optionsB = {
    legend: "none",
  };
  const optionsC = {
    legend: { position: "bottom" },
  };

  const optionsD = {
    legend: { position: "bottom" },

    bars: "horizontal",
  };

  return (
    <Card className="static-card profile-access-denied-card">
      <Card.Body>
        <h4>Оқушы рейтингі</h4>
        <hr />
        <Row>
          <Col lg={6} xs={12} className="">
            <h6>Барлық сабақтар көрсеткіші</h6>
            <Chart
              chartType="PieChart"
              data={dataA}
              options={options}
              width={"100%"}
              height={"400px"}
            />
            <hr />
          </Col>
          <Col lg={6} xs={12} className="text-center">
            <h6>Өтілген сабақтар көрсеткіші</h6>
            <Chart
              chartType="ColumnChart"
              data={dataB}
              options={optionsB}
              width={"100%"}
              height={"400px"}
            />
            <hr />
          </Col>
          <Col lg={12} xs={12} className="d-flex row justify-content-start">
            <h6>Ағымдағы айдағы балл көрсеткіші</h6>
            <Chart
              style={{ marginTop: "10px" }}
              chartType="Bar"
              data={dataD}
              options={optionsD}
              width={"100%"}
              height={"100px"}
            />
            <hr />
          </Col>
          <Col lg={12} xs={12}>
            <h6>Жылдық балл көрсеткіші</h6>
            <Chart
              className=""
              style={{ padding: "0", color: "green" }}
              chartType="LineChart"
              data={dataC}
              options={optionsC}
              width={"100%"}
              height={"400px"}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Rating;
