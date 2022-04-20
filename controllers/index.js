/**
 * Application Controller
 */

// Dependencies

// App Controller Container
const appController = {};
const res = require('express/lib/response');
const Videos = require('../models/Videos');
const { checkApiUptime } = require('../utils/googleapi');

const LIMIT = 10;

/**
 * @description - Send application status
 * @api {GET} / Send application status
 * @access Public
 */
appController.index = async (req, res) => {
    try {
        const apiRunning = await checkApiUptime();
        return res.status(200).json({
            message: `Application is running, YouTube Quota is ${apiRunning ? 'good' : 'exhausted'}`,
            data: {
                repository: '',
                motivation: '',
                owner: {
                    name: 'Kunal Keshan',
                    website: 'https://kunalkeshan.dev',
                    github: 'https://github.com/kunalkeshan'
                }
            },
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error,
            success: false,
        });
    }
}

/**
 * @description - Get all videos
 * @api {GET} /api/videos Get all videos
 * @query {String} {limit, page}
 * @access Public
 * @example /api/videos?limit=10&page=1
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
 * @api {GET} /api/videos/search Search videos
 * @query {String} {query}
 * @access Public
 * @example /api/videos/search?query=nodejs
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