
import React from "react";
import {
  Tab,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
  Tabs,
} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import { PersonFill, TelephoneFill, PinMapFill, Calendar2Fill, PhoneFill } from "react-bootstrap-icons";


const profileDetail = ({
                lastname, firstname, patronymic, phone, address, birthday, 
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
                    <h5 style={{margin: '16px 0'}}><PersonFill size={'24px'} color="#00509d"/>  {lastname} {firstname} {patronymic}</h5>
                    <h5 style={{margin: '16px 0'}}><TelephoneFill size={'24px'} color="#00509d"/>  {phone}</h5>
                    <h5 style={{margin: '16px 0'}}><PinMapFill size={'24px'} color="#00509d"/>  {address}</h5>
                    <h5 style={{margin: '16px 0'}}><Calendar2Fill size={'24px'} color="#00509d"/>  {birthday}</h5>
                    <hr />
                    {father_lname}, {father_fname}, {father_patron}, {father_phone}, 
                    {mother_lname}, {mother_fname}, {mother_patron}, {mother_phone},
                    </Col>
                    <Col className="col-lg-4 col-xs-12"
                    >
                        <Card className="student-class-abcd">
                            <Card.Body className="text-center">
                                <h1>{classroom} {abcd}</h1>
                                <h6>сынып оқушысы</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                
                
                </Row>
            </Card.Body>
        </Card>
    </>)
}

export default profileDetail