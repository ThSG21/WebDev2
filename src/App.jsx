import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login.jsx";
import CreateAccount from "./createAccount.jsx";
import Posts from "./posts.jsx";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route 
                path="/login" 
                element={<Login setUser={setUser} />} 
            />

            <Route path="/createAccount" element={<CreateAccount />} />

            <Route 
                path="/posts" 
                element={user ? <Posts /> : <Navigate to="/login" />} 
            />
        </Routes>
    );
}

export default App;