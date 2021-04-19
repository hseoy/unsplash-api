import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {
  handleSearchPhotos,
  handleGetRandomPhotos,
} from './controllers/photo.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json('unsplash api');
});

app.get('/photos/search', handleSearchPhotos);
app.get('/photos/random', handleGetRandomPhotos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is runniing on port ${PORT}`);
});
