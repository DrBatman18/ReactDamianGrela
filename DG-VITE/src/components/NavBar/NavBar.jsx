import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"


function NavBar() {
  
    return (
    <nav>    

<Navbar bg="dark" variant="dark">
      <Container fluid>
        
        <Navbar.Brand href="#">Encontralo ONLINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Nosotros</Nav.Link>
            <Nav.Link href="#action2">Servicio</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Tecnologia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Soportes
              </NavDropdown.Item>
            </NavDropdown>           
          </Nav>
          <Button variant="outline-success">5</Button>             
          <Button variant="outline-success">Carrito</Button>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  )
}

export default NavBar