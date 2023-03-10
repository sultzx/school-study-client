import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetChapters } from "../../../redux/slices/study.js";

const Chapters = () => {




    return (<>
        <Col lg={2}>
            <Card className="static-card profile-access-denied-card">
                <Card.Body>

                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default Chapters