/**
 * Google YouTube API Configuration
 */

// Dependencies
const axios = require('axios');
const { YOUTUBE_API_KEY } = require('../config');

const baseURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=10&order=date`;

const findTopicVideos = async (topic) => {
    try {
        const { data } = await axios.get(`${baseURL}&q=${topic}`);
        const videos = data.items.map((item) => {
            console.log(item)
            return {
                videoId: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.medium.url,
                publishedAt: item.snippet.publishedAt,
                channelTitle: item.snippet.channelTitle,
                channelId: item.snippet.channelId,
            };
        });
        return videos;
    } catch (error) {
        return Promise.reject(error);
    }
};

module.exports = {
    findTopicVideos,
}