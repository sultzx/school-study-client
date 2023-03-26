import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Calendar, dayjsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from "moment/moment";

import 'moment/locale/kk'

const Main = () => {

    return  <>
        <Container fluid style={{background: 'white'}}>
            <Container  className="d-flex column justify-content-center align-items-center" style={{ height: '600px'}}>
                <Row className="text-center">
                    <Col  md={12}><h2 className="text-center">School study - онлайн-мектебі</h2></Col>
                    <Col md={12}><hr /></Col>
                    <Col md={12}><h5>1-11 сынып аралығындағы мектеп оқушыларына арналған интерактивті онлайн-мектеп веб-қосымшасы</h5></Col>
                    
                    <Col md={12}>
                    <br />
                        <button onClick={() => {
                        window.location.assign('http://localhost:3000/for-student')
                    }} className="btn btn-primary signup shadow">Білім алуға өту</button> </Col>
                     
                </Row>
            </Container>
        </Container>
    </>
}

export default Main