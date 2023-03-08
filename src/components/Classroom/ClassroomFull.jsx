import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllClassroom } from "../../redux/slices/study";
import Stud from "./Stud";
import Students from "./Students";

const ClassroomFull = () => {

    const {id} = useParams()

const dispatch = useDispatch()

    const {classrooms} = useSelector((state) => state.study)

    React.useEffect(() => {
        dispatch(fetchAllClassroom())
    }, [])

    const classroom = []

    const [clroom, setClass] = React.useState()

    classrooms && classrooms.items && classrooms.items.forEach((item, i) => {
        if (item._id == id) {
            classroom.push(item)
        }
    })

    console.log('classroom && classroom[0]', classroom && classroom[0])

    React.useEffect(() => {
        setClass(classroom && classroom[0])
    }
    , [])

    return(<>
        <Container fluid style={{background: 'white'}}>
            <br />
            <Container>

                <h1>{classroom && classroom[0] && classroom[0].name}
                {classroom && classroom[0] && classroom[0].abcd} сыныбы</h1> 
                <br />
                    <Card className="static-card profile-access-denied-card">
                        <Row>
                            {
                                classroom && classroom[0] && 
                                classroom[0].students && classroom[0].students.map((stud, i) => (
                                    <Stud
                                        lastname={stud && stud.lastname}
                                        firstname={stud && stud.firstname}
                                        patronymic={stud && stud.patronymic}
                                        phone={stud && stud.phone}
                                        email={stud && stud.email}
                                        classroom={stud && stud.classroom && stud.classroom}
                                    />
                                ))
                            }
                        </Row>
                        <hr />
                        <div className="d-flex column justify-content-end">
                        <Button
                            style={{
                            marginTop: "12px",
                            }}
                            onClick={() => {
                            window.location.assign(
                                `http://localhost:3000/classrooms`
                            );
                            }}
                            className="btn btn-primary outlined-btn "
                        >
                            Артқа қайту
                        </Button>
                            <Button 
                            style={{
                                marginTop: '12px'
                            }}
                            className="btn btn-primary signup shadow"
                            onClick={() => {
                                window.location.assign(`http://localhost:3000/classrooms/${id}/insert-students`)
                            }}
                            >Оқушы қосу</Button>
                        </div>
                        
                    </Card>
            </Container>
            <br />
            <br />
            <br />
        </Container>
    </>)
}

export default ClassroomFull