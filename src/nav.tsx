import Home from "./home.tsx";
import About from "./about.tsx";
import TheForm from "./form.tsx";
import Products from "./products.tsx";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



function TheNav() {
    return (
        <BrowserRouter>
            <SetNav />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<TheForm />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

function SetNav() {
    return (
        <Navbar bg="light" expand="lg" dat-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/home">Puma-BootStrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/form">Form</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>      
            </Container>
        </Navbar>
    );
}

export default TheNav;