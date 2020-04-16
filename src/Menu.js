import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
    return (
        <Navbar fixed="top" expand="lg">
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
            <Navbar.Brand>
                <Nav.Link as={Link} to="/" exact>
                    Елена Власова
                </Nav.Link>
            </Navbar.Brand>
        </Navbar>
    );
};

export default Menu;
