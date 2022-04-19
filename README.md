# Medbikri Technologies Internship Submission - Backend Assignment

Table of Contents:

- [Task Done](#task-done)
- [Objective](#objective)
- [Basic Requirements](#basic-requirements)
- [Bonus Points](#bonus-points)

## Task Done

## Objective

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Basic Requirements

- Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.
- A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
- A basic search API to search the stored videos using their title and description.

## Bonus Points

- Add support for supplying multiple API keys so that if quota is exhausted on one, it automatically uses the next available key.
- Make a dashboard to view the stored videos with filters and sorting options (optional)

## License

This project is licensed under the [MIT license](./LICENSE).
