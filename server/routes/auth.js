const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
    const { uname, pwd, email, phoneno } = req.body;

    if (!uname || !pwd || !email) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(pwd, 10);

        // Using RETURNING * to return the user data (excluding password ideally, but for now returning what's needed)
        const result = await db.query(
            'INSERT INTO users (uname, pwd, email, phoneno) VALUES ($1, $2, $3, $4) RETURNING uid, uname, email',
            [uname, hashedPassword, email, phoneno]
        );

        res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, pwd } = req.body;

    if (!email || !pwd) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    try {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(pwd, user.pwd);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user: { uid: user.uid, uname: user.uname, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
