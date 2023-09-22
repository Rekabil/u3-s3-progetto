import { Button, Col, Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/Spotify_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Col xs={2}>
      <Navbar variant="dark" expand="md" className="fixed-left justify-content-between text-start" id="sidebar">
        <Container className="flex-wrap">
          <Navbar.Brand>
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <ul>
                <li>
                  <Link className="ps-1 nav-link" to="/">
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    &nbsp;Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/library">
                    <FontAwesomeIcon icon={faBookOpen} size="lg" /> &nbsp;Library
                  </Link>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <Form.Control placeholder="Search" aria-label="Search" aria-describedby="Search" />
                    <Button variant="outline-secondary" size="sm" id="button-addon1">
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button variant="signup">Sign up</Button>
          <Button variant="login">Login</Button>
          <Nav.Link to="#">Cookie Policy</Nav.Link>
          <Nav.Link to="#"> Privacy</Nav.Link>
        </div>
      </Navbar>
    </Col>
  );
};

export default MyNavbar;
