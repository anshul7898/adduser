import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const isLoginCheck = localStorage.getItem("isLogin");
  const loginUserName = localStorage.getItem("loginName");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoginCheck === "1") {
      setLogin(true);
      setUserName(loginUserName);
    }
  }, [login, userName]);

  const logoutUserHandler = () => {
    localStorage.setItem("loginName", "");
    localStorage.setItem("isLogin", 0);
    localStorage.setItem("type", "");
    navigate("/");
  };

  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand>Hotel Booking App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contactus">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {login && <Nav.Link href="/searchprn">Search Ticket</Nav.Link>}
          </Nav>
          {login && <Navbar.Text>Signed in as: {userName}</Navbar.Text>}
          {!login && (
            <Nav>
              <Nav.Link className="ms-3" href="/adduser">
                Login
              </Nav.Link>
            </Nav>
          )}
          {login && (
            <Nav>
              <Nav.Link className="ms-3" href="/" onClick={logoutUserHandler}>
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
