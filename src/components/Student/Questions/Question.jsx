import {Container, Row, Col, Card, Button} from 'react-bootstrap'

const Question = ({i, id, question, teacher, answer, createdAt, updatedAt}) => {

    return (<>
    <Col lg={12} xs={12} style={{margin: '12px 0'}}>
            <Card className='static-card profile-access-denied-card'>
            <h5 style={{color:'#00509d'}}>Сұрақ - {i + 1}</h5>
            <p style={{color:'#00509d'}}>
            Кімге: &nbsp;
            <span style={{color:'black'}}>
                {teacher && teacher.lastname} &nbsp;
                {teacher && teacher.firstname}&nbsp;
                {teacher && teacher.patronymic}&nbsp;
            </span>  
            </p> 
                
            <Card.Body style={{padding: '6px 0px 6px 24px'}}>
                <Row>
                    <Col lg={12} xs={12}
                        style={{
                            border: '1px solid #00509d',
                            borderRadius: '12.5px',
                            padding: '12px 6px'
                        }}
                        className="d-flex row justify-content-start">
                            <p style={{color:'#00509d'}}>Сұрақ:&nbsp; 
                            <span style={{color:'black'}}> 
                                {question}
                                </span>
                            </p>
                            <h6 style={{color:'#00509d'}}>{((createdAt)).substring(0, 16).replace('T', ' ')}</h6>

                    </Col>
                    
                    <Col lg={12} xs={12} 
                        style={{
                            border: '1px solid #00509d',
                            borderRadius: '12.5px',
                            padding: '12px 6px',
                            marginTop: '24px'
                        }}
                        className="d-flex row justify-content-start">
                        <p style={{color:'#00509d'}}>Жауап:&nbsp; 
                            <span style={{color:'black'}}> 
                                {answer ? answer :  <span style={{color:'#00509d'}}>Әзірге жауап жоқ</span> }
                                </span>
                            </p>
                            <h6 style={{color:'#00509d'}}>{ ((updatedAt)).substring(0, 16).replace('T', ' ')}</h6>
                        
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>

    </>)
}

export default Question