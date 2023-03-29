//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function NoFound(props) {
    return (
        <Container className='main d-flex flex-column align-items-center justify-content-center'>
        <Row className='align-self-center'>
        <Col className="d-flex flex-column align-items-center justify-content-center">
            <i className="bi bi-file-earmark-excel-fill" style={{ fontSize: '250px' }}></i>
            <h1>Error 404: Page Not Found.</h1> 
        </Col>
        </Row>
        </Container>
    );
}
    
export default NoFound;

