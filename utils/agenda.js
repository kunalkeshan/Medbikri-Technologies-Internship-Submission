/**
 * Agenda Setup to Update Videos
 */

// Dependencies
const Agenda = require('agenda');
const Videos = require('../models/Videos');
const { findTopicVideos } = require('./googleapi');
const { DB_URL, MAIN_TOPIC } = require('../config');

const agenda = new Agenda({ db: { address: DB_URL } });

agenda.on('ready', async () => {
    console.log('Agenda Ready');
});

agenda.define('update video list', async (job) => {
    try { console.log('running');
        const videos = await findTopicVideos(MAIN_TOPIC);
        await Videos.insertMany(videos);
    } catch (error) {
        console.log('Error running - Update Video List', error);
    }
});

agenda.define('remove duplicate videos', async (job) => {
    try {
        const videos = await Videos.aggregate([
            {
                '$group': {
                    '_id': { videoId: '$videoId' },
                    duplicate: { '$addToSet': '$_id' },
                    'count': { '$sum': 1 },
                },
            },
            {
                '$match': {
                    count: { '$gt': 1 },
                },
            }
        ],
            { allowDiskUse: true });
        let duplicates = [];
        videos.forEach((doc) => {
            doc.duplicate.shift();
            doc.duplicate.forEach((duplicate) => {
                duplicates.push(duplicate);
            });
        });
        await Videos.deleteMany({ _id: { $in: duplicates } });
    } catch (error) {
        console.log('Error running - Remove Duplicate Videos', error);
    }
});

(async () => {
    try {
        // await agenda.start();
        // await agenda.every('1 minute', 'update video list');
        // await agenda.every('1 minute', 'remove duplicate videos');
    } catch (error) {
        console.log(error);
    }
})();