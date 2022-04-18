/**
 * Database Connection
 */

// Dependencies
const mongoose = require('mongoose');
const { DB_URL } = require('../config');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database');
        console.log(error);
    }
}