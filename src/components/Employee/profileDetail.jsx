
import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Person, Telephone, PinMap, Calendar2X, Bank2, Bank } from "react-bootstrap-icons";


const profileDetail = ({
                lastname, firstname, patronymic, phone, subject,
                classrooms}) => {

    
    const sortedClassrooms = []

    classrooms && classrooms.forEach((item) => {
        sortedClassrooms.push(item)
    })


    return (<>
        <Card className="static-card profile-access-denied-card">
            <Card.Body>
                
                <Row>
                    <Col lg={8} xs={12}>
                    <h4>Жеке ақпарат</h4>
                    <hr />
                    <h5 style={{margin: '16px 0'}}><Person size={'22px'} color="#00509d"/> &nbsp; {lastname} {firstname} {patronymic}</h5>
                    <h5 style={{margin: '16px 0'}}><Telephone size={'22px'} color="#00509d"/> &nbsp; {phone}</h5>
                    <h5 style={{margin: '16px 0'}}><Bank size={'22px'} color="#00509d"/> &nbsp;
                    {sortedClassrooms && sortedClassrooms.map( (item, i) => (<span
                        style={{
                            margin: '0 4px',
                            padding: '2px 8px', border: '1px solid #004485',
                            borderRadius: '12px',
                            background: '#00509d',
                            color: 'white'
                        }}
                        >{item.name} {item.abcd} </span>))}
                    </h5>
                    <hr />
                    </Col>
                    <Col className="col-lg-4 col-xs-12">
                        <Card className="student-class-abcd">
                            <Card.Body className="text-center">
                                
                                <h3 style={{color: '#00509d'}}>{subject}</h3>
                                <hr />
                                <h4>пәні мұғалімі</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>)
}

export default profileDetail