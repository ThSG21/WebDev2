const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password:'',
    database: 'webdev2Project',
})

//User Functions -----

const bcrypt = require('bcrypt');

async function createUser(username, password) {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.query(
        'INSERT INTO users (username, passwordHash) VALUES (?, ?)',
        [username, hashedPassword]
    );

    return result.insertId;
}

async function getUserByID(userId){
    const [rows] = await pool.query (
        'SELECT * FROM users WHERE id = ?',
        [userId]
    );

    return rows[0] || null;
}

async function getUserByUsername(username){
    const [rows] = await pool.query (
        'SELECT * FROM users WHERE username = ?',
        [username]
    );

    return rows[0] || null;
}

//Post Functions -----

async function createPost (userId, content) {
    const [result] = await pool.query (
        'INSERT INTO posts (user_id, content) VALUES(?, ?)',
        [userId, content]
    );

    return result.insertId;
}

async function deletePost(postId, userId) {
    const [result] = await pool.query(
        'DELETE FROM posts WHERE id = ? AND user_id = ?',
        [postId, userId]
    );

    console.log("DB DELETE RESULT:", result);

    return result.affectedRows;
}

async function getPostById (postId) {
    const [rows] = await pool.query(
        'SELECT * FROM posts WHERE id = ?',
        [postId]
    );

    return rows[0] || null;
}

async function getAllPosts () {
    const [rows] = await pool.query(
        'SELECT * FROM posts'
    )

    return rows || [];
} 


module.exports = {
    createUser,
    getUserByID,
    getUserByUsername,
    createPost,
    deletePost,
    getPostById,
    getAllPosts
}