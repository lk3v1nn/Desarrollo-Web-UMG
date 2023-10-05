import React from "react";
import "../styles/Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navegador() {
    const categoriaActiva = localStorage.getItem("categoriaActiva") || ""

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">HDT-9</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        href="/cats"
                        className={categoriaActiva === "Gatos" ? "active" : ""}
                        onClick={() => {
                            localStorage.setItem("categoriaActiva", "Gatos");
                        }}
                    >
                        Gatos IMG
                    </Nav.Link>
                    <Nav.Link
                        className={categoriaActiva === "Perros" ? "active" : ""}
                        href="/dogs"
                        onClick={() => {
                            localStorage.setItem("categoriaActiva", "Perros");
                        }}
                    >
                        Perros IMG
                    </Nav.Link>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navegador;
