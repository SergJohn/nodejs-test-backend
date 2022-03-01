require("dotenv").config();

const { Client } = require('pg');

const client = new Client({
    user: process.env.dbUser,
    host: process.env.hostAdd,
    database: process.env.dbDb,
    password: process.env.dbPass,
    port: process.env.dbPort,
    connectionString: process.env.DATABASE_URL,
    // ssl: true
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    // client.end()
})

module.exports = client;