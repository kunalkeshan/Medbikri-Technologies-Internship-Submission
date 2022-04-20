# Medbikri Technologies Internship Submission - Backend Assignment

Table of Contents:

- [Task Done](#task-done)
  - [Fetch Videos](#fetch-videos)
  - [Search Videos](#search-videos)
- [Objective](#objective)
- [Basic Requirements](#basic-requirements)
- [Bonus Points](#bonus-points)

## Task Done

Topic Selected: "Programming"

Visit [https://kunal-keshan-medbikri-internship.onrender.com/](https://kunal-keshan-medbikri-internship.onrender.com/) to see the application in action and check it's uptime.

### Fetch Videos

```javascript

/**
 * @description - Get all videos
 * @api {GET} /api/videos Get all videos
 * @query {String} {limit, page}
 * @access Public
 * @example - https://kunal-keshan-medbikri-internship.onrender.com/api/videos?limit=10&page=1
 */

```

### Search Videos

```javascript

/**
 * @description - Search videos
 * @api {GET} /api/videos/search Search videos
 * @query {String} {query}
 * @access Public
 * @example - https://kunal-keshan-medbikri-internship.onrender.com/api/videos/search?query=hello
 */

```

## Objective

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Basic Requirements

- Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.
- A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
- A basic search API to search the stored videos using their title and description.

## License

This project is licensed under the [MIT license](./LICENSE).
