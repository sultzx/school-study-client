import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Person, Telephone, PinMap, Calendar2X } from "react-bootstrap-icons";
import { Chart } from "react-google-charts";

const rating = () => {
  const dataA = [
    ["Pac Man", "Percentage"],
    ["Қазақ тілі", 35],
    ["Математика", 25],
    ["Қазақстан тарихы", 15],
    ["Ағылшын тілі", 10],
  ];

  const dataB = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#407CB6"], // RGB value
    ["Silver", 10.49, "#407CB6"], // English color name
    ["Gold", 19.3, "#407CB6"],
    ["Platinum", 21.45, "#407CB6"], // CSS-style declaration
  ];

  const dataC = [
    [
      "Жалпы көрсеткіш",
      "Қазақ тілі",
      "Математика",
      "Қазақстан тарихы",
      "Ағылшын тілі",
    ],
    ["I тоқсан", 92, 86, 97, 96],
    ["II тоқсан", 85, 75, 84, 80],
    ["III тоқсан", 75, 87, 85, 76],
    ["IV тоқсан", 92, 92, 98, 67],
  ];

  const dataD = [
    ["", "Қазақ тілі", "Математика", "Қазақстан тарихы", "Ағылшын тілі"],
    ["Ақпан", 92, 86, 97, 96],
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
    <Card
      className="static-card profile-access-denied-card"
    >
      <Card.Body>
      <h4>Оқушы рейтингі</h4>
      <hr />
        <Row>

          <Col lg={6} xs={12} className="">
            <h6>Апталық уақыт көрсеткіші</h6>
            <Chart
              chartType="PieChart"
              data={dataA}
              options={options}
              width={"auto"}
              height={"300px"}
            />
            <hr />
          </Col>
          <Col lg={6} xs={12} className="text-center">
          <h6>Өтілген сабақтар көрсеткіші</h6>
            <Chart
              chartType="ColumnChart"
              data={dataB}
              options={optionsB}
              width={"auto"}
              height={"300px"}
            />
            <hr />
          </Col>
          <Col
            lg={12}
            xs={12}
            className="d-flex row justify-content-start"
          >
            <h6>Ағымдағы айдағы балл көрсеткіші</h6>
            <Chart
            style={{marginTop: '10px'}}
              chartType="Bar"
              data={dataD}
              options={optionsD}
              width={"100%"}
              height={"200px"}
            />
            <hr />
          </Col>
          <Col lg={12} xs={12} className=" sticky-top">
          <h6>Жылдық балл көрсеткіші</h6>
            <Chart
              style={{ padding: "0", margin: "12px -22px", color: "green" }}
              chartType="LineChart"
              data={dataC}
              options={optionsC}
              width={"auto"}
              height={"500px"}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default rating;
