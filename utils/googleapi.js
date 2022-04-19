/**
 * Google YouTube API Configuration
 */

// Dependencies
const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});