
import React from "react";
import {
  Row,
  Col,
  Card
} from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Person, Telephone, PinMap, Calendar2X, EnvelopePaper } from "react-bootstrap-icons";


const profileDetail = ({
                lastname, firstname, patronymic, email, phone, address, birthday, 
                father_lname, father_fname, father_patron, father_phone, 
                mother_lname, mother_fname, mother_patron, mother_phone,
                classroom, abcd}) => {
    return (<>
        <Card className="static-card profile-access-denied-card">
            <Card.Body>
                
                <Row>
                    <Col lg={8} xs={12}>
                    <h4>Жеке ақпарат</h4>
                    <hr />
                    <h5 style={{margin: '16px 0'}}><Person size={'22px'} color="#00509d"/> &nbsp; {lastname} {firstname} {patronymic}</h5>
                    <h5 style={{margin: '16px 0'}}><Telephone size={'22px'} color="#00509d"/> &nbsp; {phone}</h5>
                    <h5 style={{margin: '16px 0'}}><EnvelopePaper size={'22px'} color="#00509d"/> &nbsp; {email}</h5>

                    <h5 style={{margin: '16px 0'}}><PinMap size={'22px'} color="#00509d"/> &nbsp; {address}</h5>
                    
                    <hr />
                    <h6 style={{margin: '16px 0'}}><Person size={'22px'} color="#00509d"/> &nbsp;  {father_lname} {father_fname} {father_patron}</h6>
                    <h6 style={{margin: '16px 0'}}><Telephone size={'22px'} color="#00509d"/> &nbsp; {father_phone}</h6>
                    <hr />
                    <h6 style={{margin: '16px 0'}}><Person size={'22px'} color="#00509d"/> &nbsp;  {mother_lname} {mother_fname} {mother_patron}</h6>
                    <h6 style={{margin: '16px 0'}}><Telephone size={'22px'} color="#00509d"/> &nbsp; {mother_phone}</h6>
                    </Col>
                    <Col className="col-lg-4 col-xs-12">
                        <Card className="student-class-abcd">
                            <Card.Body className="text-center">
                                <h1>{classroom} {abcd}</h1>
                                {classroom && abcd &&  <h6>сынып оқушысы</h6>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>)
}

export default profileDetail