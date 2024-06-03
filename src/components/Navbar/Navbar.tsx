import React from 'react';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <BootstrapNavbar bg="light" data-bs-theme="light">
            <Container>
                <BootstrapNavbar.Brand as={NavLink} to="/">
                    Главная
                </BootstrapNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="games">
                        Игры
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="genres">
                        Жанры
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="platforms">
                        Платформы
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="publishers">
                        Издатели
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="contacts">
                        Контакты
                    </Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};
