import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

//TODO Autofill en base a props
function MyNavBar(props) {
  return (
    <Navbar className="bg-success" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/*<Image style={{width: '60px'}} src={props.logo} rounded  />*/}
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Frutas</Nav.Link>
            <NavDropdown title="Verduras" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Calabacines
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patatas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                De la provincia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrito <i className="bi bi-basket-fill" style={{ fontSize: 20 }}></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;