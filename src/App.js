import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar fixed="top" expand="lg" bg="light">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                activeClassName="active"
                                exact
                            >
                                Обо Мне
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/services"
                                activeClassName="active"
                                exact
                            >
                                Услуги
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/contacts"
                                activeClassName="active"
                                exact
                            >
                                Контакты
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">Анастасия Модина</Navbar.Brand>
                </Navbar>
                <Container>
                    <h3>content</h3>
                </Container>
                <footer>
                    <h2>footer</h2>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
