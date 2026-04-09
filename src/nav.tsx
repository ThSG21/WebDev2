import Home from "./home.tsx";
import About from "./about.tsx";
import TheForm from "./form.tsx";
import Products from "./products.tsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Nav() {
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
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;