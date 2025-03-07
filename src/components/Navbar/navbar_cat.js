import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary shadow-sm" sticky='top'>
      <Container>
        <Navbar.Brand href='/home'>Navbar home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/landing' >Landing</Nav.Link>
            <Nav.Link >Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another actionaaa
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>            
          </Nav>
          {/* <i class="fa-brands fa-react"></i> */}
            <Button variant="success" href='/login'>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;