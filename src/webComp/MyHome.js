//Importo elementos de bootstra
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

function MyHome(props) {
    return (
        <Container className='main d-flex flex-grow-1 flex-column align-items-center justify-content-center'>
        <Row>
            <Col className="d-flex flex-column align-items-center justify-content-center">
                <Image style={{width: '300px'}} src={props.logo} rounded  />
                <h1>Web en Construcción</h1> 
                <Button className="bounce-top" variant="success">Hacer pedido por Telegram</Button>
                <i>Gastos de envío: 2,99€</i>
            </Col>
        </Row>
        </Container>
    );
}
    
export default MyHome;

