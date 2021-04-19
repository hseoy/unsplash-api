# UNSPLASH API

This is an Express REST API service using [UNSPLASH API](https://unsplash.com/documentation)

## Table of content

- [Technologies](#technologies)
- [Install and Run](#install-and-run)
- [Usage](#usage)

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Unsplash API](https://unsplash.com/documentation)

## Install and Run

1. Clone this repository

```
$ git clone https://github.com/hseoy/news-viewr-api
```

2. Get the API key from [here](https://unsplash.com/developers). Then modify the .env.dev

```
API_ACCESS_KEY=YOUR_API_ACCESS_KEY
```

3. Install dependencies

```
$ yarn install
```

4.  Start the server

```
$ yarn start:dev
```

## Usage

### `GET /` API for testing

Return:

```
"unsplash api"
```

### `GET /photos/search` API to search photos

Search photos using the [Unsplash API](https://unsplash.com/documentation)

Queries :
|query|description|is required|
|:---:|---|:---:|
|`query`|Search terms.|`yes`|
|`page`|Page number to retrieve. (Optional; default: 1)|`no`|
|`perPage`|Number of items per page. (Optional; default: 10)|`no`|

Return:

```
[
  // You can check the response here: https://unsplash.com/documentation#search-photos
]
```

### `GET /photos/random` API to get random photos

Get random photos using the [Unsplash API](https://unsplash.com/documentation)

Queries :
|query|description|is required|
|:---:|---|:---:|
|`query`|Limit selection to photos matching a search term.|`yes`|
|`count`|The number of photos to return. (Default: 1; max: 30)|`no`|

Return:

```
[
  // You can check the response here: https://unsplash.com/documentation#get-a-random-photo
]
```
