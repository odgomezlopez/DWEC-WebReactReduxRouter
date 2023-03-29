//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function InWork(props) {
    return (
        <Container className='main d-flex flex-column align-items-center justify-content-center'>
        <Row className='align-self-center'>
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1>InWork | {props.text}</h1> 
        </Col>
        </Row>
        </Container>
    );
}
    
export default InWork;

