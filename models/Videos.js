/**
 * Videos Model
 */

// Dependencies
const {Schema, model} = require('mongoose');

// Videos Schema
const videosSchema = new Schema({
    title: String,
    description: String,
});

// Videos Model
const Videos = model('Videos', videosSchema);

module.exports = Videos;