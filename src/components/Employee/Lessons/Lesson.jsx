import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Lesson = ({chapter, title, text, img, teacher}) => {

    return (<>
            <Col lg={6} >
                <Card className="static-card profile-access-denied-card">
                    <Card.Body className="d-flex row">
                        <h4>Пән: {teacher && teacher.subject.name}</h4>
                        <h4>Бөлім: {chapter}</h4>
                        <h5>Сабақ тақырыбы: {title}</h5>
                        <img src={img && img} 
                        className="form-control d-flex row justify-content-center
                        align-items-center" 
                        style={{height: '300px',
                            border: '1px solid black',
                            borderRadius: '12.5px'
                        }} alt="" />
                        <p>{text}</p>
                    </Card.Body>
                </Card>
            </Col>
    </>)
}

export default Lesson