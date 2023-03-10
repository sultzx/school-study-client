import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetLessons } from "../../../redux/slices/study.js";
import Chapter from "./Chapter.jsx";
import Lesson from "./Lesson.jsx";


const Lessons = () => {

    const dispatch = useDispatch()

    const {lessons} = useSelector(state => state.study)

    React.useEffect(() => {
        dispatch(fetchGetLessons())
    }, [])



    return (<>
    <Container fluid style={{background: 'white'}}>
        <br />
        <Container>
            <h3>Барлық сабақтар</h3>
            <br />
                <Card className="static-card profile-access-denied-card">
                <Card.Body>
                    <Row>
                        {lessons && lessons.items && lessons.items.map((item, i) => {
                            <Lesson 
                                id={item && item._id}
                                chapter={item && item.chapter}
                                title={item && item.title} 
                                text={item && item.text}
                                img={item && item.img}
                                teacher={item && item.teacher}
                            />
                        })}
                        <Col lg={12} className="d-flex column justify-content-end">
                            <Button></Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
<br /><br /><br />
    </Container>
        
    </>)
}

export default Lessons