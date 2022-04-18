/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const { PORT } = require('./config');


// Initializing Express Application
const app = express();

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up routes

// Running Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
