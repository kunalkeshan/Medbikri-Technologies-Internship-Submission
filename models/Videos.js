/**
 * Videos Model
 */

// Dependencies
const {Schema, model} = require('mongoose');

// Videos Schema
const videosSchema = new Schema({});

// Videos Model
const Videos = model('Videos', videosSchema);

module.exports = Videos;