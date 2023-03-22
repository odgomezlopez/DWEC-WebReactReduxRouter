import MyNavBar from './webComp/MyNavBar';
import MyFooter from './webComp/MyFooter';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image'
import Logo from './imgs/logo.svg'
import { height } from '@mui/system';

function App() {
  return (
    <div className='bg-light min-vh-100'>
        <MyNavBar />
        <Container className='bg-info'>
            <Row className='min-vh-100'>
              <Col className="d-flex justify-content-center">
                <Image src={Logo} rounded  />
              </Col>
            </Row>

        </Container>
        <MyFooter />
    </div>
  )
}

export default App;