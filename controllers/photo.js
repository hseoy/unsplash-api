import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
  accessKey: process.env.API_ACCESS_KEY,
  fetch: nodeFetch,
});

const handleSearchPhotos = async (req, res) => {
  const { query, page, perPage } = req.query;
  try {
    const photos = await unsplashApi.search.getPhotos({
      query,
      page,
      perPage,
    });
    return res.json(photos.response.results);
  } catch {
    return res.status(400).json('Query parameters are not valid');
  }
};

const handleGetRandomPhotos = async (req, res) => {
  const { query, count } = req.query;
  try {
    const photos = await unsplashApi.photos.getRandom({
      query,
      count,
    });
    console.log(photos);
    return res.json(photos.response);
  } catch {
    return res.status(400).json('Query parameters are not valid');
  }
};

// eslint-disable-next-line import/prefer-default-export
export { handleSearchPhotos, handleGetRandomPhotos };
