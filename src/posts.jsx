import {Container, Button, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import './posts.css';

function Posts () {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await fetch('http://localhost:3000/posts',{ 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user.userId,
                content
            })
        }); 
        
        const data = await result.json();

        if (data.success) {
            setPosts([...posts, {
                id: data.postId,
                user_id: user.userId,
                content
            }]);

            setContent('');
        }

    }

    /*const handleDelete = async (id) => {

        const result = await fetch(`http://localhost:3000/posts/${id}?userId=${user.userId}`, {
            method: 'DELETE'
        });
 
            const result = await fetch(`http://localhost:3000/posts/${id}?userId=${user.userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    userId: user.userId
                })
            })
        

        const data = await result.json();

        if (data.success) {
            setPosts(posts.filter(p => p.id !== id));
        }
    }*/

        const handleDelete = async (id) => {
            try {
                console.log("Deleting:", id);

                const response = await fetch(
                    `http://localhost:3000/posts/${id}?userId=${user.userId}`,
                    {
                        method: 'DELETE',
                    }
                );

                console.log("Status:", response.status);
                console.log("USER ID:", user.userId);
                console.log("POST ID:", id);

                const data = await response.json();

                console.log("Delete response:", data);

                if (data.success) {
                    setPosts(prev => prev.filter(p => p.id !== id));
                } else {
                    console.log("Backend said delete failed");
                }

            } catch (err) {
                console.error("Delete error:", err);
            }
        }

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };



    return (
       <>
            <div className="page">

                
                <div className="top-bar">
                <Form onSubmit={handleSubmit} className="post-form">
                    <Form.Control
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    />

                    <Button type="submit">Post</Button>
                </Form>

                <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="logout-btn"
                >
                    Log Out
                </Button>
                </div>

                
                <div className="posts-grid">
                {posts?.map(post => (
                    <div key={post.id} className="post">
                    <div className="post-user">
                        <strong>User:</strong> {post.user_id}
                    </div>

                    <div className="post-content">
                        {post.content}
                    </div>

                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                    >
                        Delete
                    </Button>
                    </div>
                ))}
                </div>

            </div>
        </>
    );
}

export default Posts;