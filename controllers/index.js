/**
 * Application Controller
 */

// Dependencies

// App Controller Container
const appController = {};
const res = require('express/lib/response');
const Videos = require('../models/Videos');

const LIMIT = 10;

/**
 * @description - Get all videos
 * @api {GET} /videos Get all videos
 * @query {String} {limit}
 * @access Public
 */
appController.getVideos = async (req, res) => {
    // Getting Query from Request
    const { limit = LIMIT, page } = req.query;
    try {
        // Finding User based on Query
        const videos = await Videos.find({})
            .limit(limit)
            .skip(Math.max(0, page * limit))
            .sort({ publishedAt: 'desc' });

        // Sending Response
        return res.status(200).json({
            message: 'Videos fetched',
            data: { videos },
            success: true,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error fetching videos',
            error,
            success: false,
        });
    }
};

/**
 * @description - Search videos
 * @api {GET} /videos/search Search videos
 * @query {String} {query}
 * @access Public
 */
appController.searchVideos = async (req, res) => {
    // Getting Query from Request
    const { query = '' } = req.query;
    try {
        // Finding Videos based on Query
        const videos = await Videos.find({
            $text: {
                $search: query,
            }
        })
            .limit(LIMIT)
            .sort({ publishedAt: 'desc' })
        console.log(videos);
        // Sending Response
        return res.status(200).json({
            message: 'Videos fetched',
            data: { videos },
            success: true,
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Error searching videos',
            error,
            success: false,
        });
    }
};

// Exporting app controller
module.exports = appController;