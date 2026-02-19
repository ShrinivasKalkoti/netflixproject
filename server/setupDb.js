const db = require('./db.js');

async function createTable() {
    try {
        await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        uid SERIAL PRIMARY KEY,
        uname VARCHAR(100) NOT NULL,
        pwd VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phoneno VARCHAR(20)
      );
    `);
        console.log("Table 'users' created successfully.");
    } catch (err) {
        console.error("Error creating table:", err);
    } finally {
        process.exit();
    }
}

createTable();
