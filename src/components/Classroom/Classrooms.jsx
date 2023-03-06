import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Classrooms = () => {


    const dispatch = useDispatch()

    const userData = useSelector((state) => state.user.data)

    
console.log()

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
                                    userData && userData.classrooms && userData.classrooms.map( (item, i) => (
                                        <Col lg={2} xs={12}>
                                            <Card className="static-card profile-access-denied-card">
                                                <Card.Body  className="text-center d-flex row align-items-center justify-content-center">
                                                    <h1 >{item.name} {item.abcd}</h1>
                                                        <h5 >сыныбы</h5>
                                                  
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )) 
                                    // userData && userData.classrooms &&
                                    // userData.classrooms.map((item, i)  (
                                    //     <Col key={i}>

                                    //     </Col>
                                    // ))
                                }
                            </Row>
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Col className="col-12 d-flex column justify-content-end">
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