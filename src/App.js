import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            <span className="text-primary">Aabhi</span>-Infratech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#About" className="mx-2">About</Nav.Link>
              <NavDropdown 
                title="Services" 
                id="collapsible-nav-dropdown"
                className="mx-2"
              >
                <NavDropdown.Item href="#action/3.1">App Development</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Website Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">SEO</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">AIML</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button 
                variant="outline-primary" 
                className="mx-2 my-1" 
                onClick={handleShowRegister}
              >
                Register
              </Button>
              <Button 
                variant="primary" 
                className="mx-2 my-1" 
                onClick={handleShowLogin}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Registration Modal */}
      <Modal show={showRegister} onHide={handleCloseRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CollapsibleExample;