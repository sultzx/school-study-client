import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllClassroom } from '../../redux/slices/study.js';
import Classroom from "./Classroom.jsx";

const Classrooms = () => {


    const dispatch = useDispatch()

    const userData = useSelector((state) => state.user.data)

    const sortedClassrooms = []


    React.useEffect(() => {
        dispatch(fetchAllClassroom())
    }, [])

    const {classrooms} = useSelector((state) => state.study)


    classrooms && classrooms.items &&
        classrooms.items.forEach((item, i) => {
            if (item.teacher._id == (userData && userData._id)) {
                sortedClassrooms.push(item)
            }
            
        })

    return (<>
        <Container fluid style={{backgroundColor: 'white'}}>
            <br />
            <Container>
            <h3>Менің сыныптарым</h3>
            <br />
                <Row>
                    <Card className="static-card profile-access-denied-card">
                        <Card.Body>
                            <Row>
                                {
                                    sortedClassrooms && sortedClassrooms.map( (item, i) => (
                                        <Classroom 
                                        key={i}
                                        id={item._id}
                                        name={item.name}
                                        abcd={item.abcd}
                                        />
                                    )) 
                                }
                            </Row>
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Col className="col-12 d-flex column justify-content-end">
                                    <Button
                                    style={{
                                        margin: '0'
                                    }}
                                    onClick={() => {
                                    window.location.assign(
                                        `http://localhost:3000/employee-profile`
                                    );
                                    }}
                                    className="btn btn-primary outlined-btn"
                                >
                                    Артқа қайту
                                </Button>
                                    <Button className="btn btn-primary signup shadow" href="/create-classroom">Жаңа сынып қосу</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <br />
                <br />
            </Container>
        </Container>
    </>)
}

export default Classrooms