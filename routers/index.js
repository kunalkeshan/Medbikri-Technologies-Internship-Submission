/**
 * Application Routers
 */

// Dependencies
const Router = require('express').Router();
const appController = require('../controllers');

Router.get('/', appController.index);

Router.get('/api/videos', appController.getVideos);

Router.get('/api/videos/search', appController.searchVideos);

module.exports = Router;