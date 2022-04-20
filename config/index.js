/**
 * Application Config File
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
const DB_URL = isProduction ? process.env.DB_URL : 'mongodb://localhost:27017/medbikri';

// Configuration container
const config = {
    PORT: process.env.PORT || 5000,
    DB_URL,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || '',
    MAIN_TOPIC: 'programming',
};

// Exporting Configuration
module.exports = config;