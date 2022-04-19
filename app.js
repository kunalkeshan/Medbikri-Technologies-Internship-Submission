/**
 * Application Entry
 */

// Dependencies
const express = require('express');
const appRouter = require('./routers');
const { PORT } = require('./config');

// Initializing Express Application
const app = express();
require('./database');

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up routes
app.use(appRouter);

// Running Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
