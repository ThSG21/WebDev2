const express = require('express');
const cors = require('cors');

const db = require('./database');

const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;



//delete Post
/*app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    const userId = req.query.userId;

    console.log("POST ID:", postId);
    console.log("USER ID:", userId);

    try{
        const result = await db.deletePost(postId, userId);
        res.json({success: result > 0});
    } catch (err) {

        res.status(500).json({ error: 'Failed to delete post'});
    }
});*/


app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.url);
    next();
});

app.delete('/posts/:id', async (req, res) => {
    console.log("1 - ROUTE HIT");

    try {
        console.log("2 - BEFORE DB CALL");

        const postId = Number(req.params.id);
        const userId = Number(req.query.userId);

        const affectedRows = await db.deletePost(postId, userId);

        console.log("3 - AFTER DB CALL");

        return res.json({ success: affectedRows > 0 });

    } catch (err) {
        console.error("DELETE ERROR:", err);
        return res.status(500).json({ success: false });
    }
});

//create Post
app.post('/posts', async (req, res) =>{
    const {userId, content} = req.body;

    try{
        const result = await db.createPost(userId, content);
        res.json({success: true, postId: result});
    } catch (err) {
        res.status(500).json({error: 'Failed to upload post'});
    }
});

//get all Posts
app.get('/posts', async (req, res) => {
    try{
        const result = await db.getAllPosts();
        res.json(result);
    } catch (err) {
        res.status(500).json({error: 'Failed to get posts'});
    }
});

//create User
app.post('/createAccount', async (req, res) => {
    const {username, password} = req.body;
    try{
        const result = await db.createUser(username, password);
        res.json({success: true, userId: result});
    } catch (err) {
        res.status(500).json({error: 'Failed to create account'});
    }
});

//veryfy User
app.post('/login', async (req, res) =>{
    const {username, password} = req.body;

    try{
        const user = await db.getUserByUsername(username);

        console.log("LOGIN ATTEMPT:", username);
        console.log("USER FOUND:", user);
        console.log("PASSWORD HASH:", user?.passwordHash);

        if(!user) {
            return res.status(400).json({error: 'User not found'});
        }

        const validPassword = await bcrypt.compare(password, user.passwordHash);

        if(!validPassword) {
            return res.status(400).json({error: 'Invalid password'});
        }

        res.json({success: true, userId: user.id, username: user.username});
    } catch (err) {
        res.status(500).json({error: 'Login failed'});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});