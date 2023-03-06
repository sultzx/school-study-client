import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const ForEmployee = () => {

    return (<>
            <Container fluid style={{backgroundColor: 'white', height: '100vh'}}>
                <Container>
                    <br />
                         <h3 style={{ color: "#00509d" }}>Қызметкердің жүйеге кіру немесе тіркелу терезесі</h3>
                    <br />
                    <Row className='d-flex column justify-content-center'>
                        <Card className='static-card profile-access-denied-card' style={{width: '700px'}}>
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    Жүйеге кірмес бұрын, ең алдымен жүйеге тіркеліп алу қажет. Содан соң, жеке ақпаратыңыз модерациядан өтіп, жеке профилге рұқсат ала аласыз. Егерде Сіз бұрын тіркелген болсаңыз, онда жүйеге кіру батырмасын басыңыз.
                                </Card.Title>
                                <br />
                                <Button className="btn btn-primary signup shadow" href='/for-student/login'>Жүйеге кіру</Button>
                                <Button className="btn btn-primary signup shadow" href='/for-student/registration'>Жүйеге тіркелу</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Container>
    </>)
}

export default ForEmployee