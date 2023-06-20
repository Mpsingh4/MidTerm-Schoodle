const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


