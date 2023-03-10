import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"

const Chapter = ({name, img, id}) => {

    return (<>
        <Col lg={3}>
            <Card className="static-card profile-access-denied-card">
                <Card.Body className="d-flex row justify-content-center">
                    {name} <br />
                    <img 
                    className="img-fluid flex-fill"
                    src={`http://localhost:5000${img}`} style={{
                        height: '180px'
                    }} alt="" />
                     <br />
                     <Button onClick={() => {}} className="btn btn-primary signup shadow">
                        Кіру
                     </Button>
                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default Chapter