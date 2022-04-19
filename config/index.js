/**
 * Application Config File
 */

// Dependencies
require('dotenv').config();

// Configuration container
const config = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/medbikri',
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || '',
    MAIN_TOPIC: 'programming',
};

// Exporting Configuration
module.exports = config;