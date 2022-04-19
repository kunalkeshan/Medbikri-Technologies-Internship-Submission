/**
 * Videos Model
 */

// Dependencies
const { Schema, model } = require('mongoose');

// Videos Schema
const videosSchema = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    publishedAt: Date,
    videoId: String,
    channelId: String,
    channelTitle: String,
});

// Search Index
videosSchema.index({title: 'text', description: 'text'});

// Videos Model
const Videos = model('Videos', videosSchema);

module.exports = Videos;
