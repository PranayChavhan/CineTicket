import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import Flash from './mongodb/models/post.js';
import TopRated from './mongodb/models/topRated.js';
import Upcoming from './mongodb/models/upcoming.js';
import Credits from './mongodb/models/casts.js';

// import postRoutes from './routes/postRoutes.js';
// import dalleRoutes from './routes/dalleRoutes.js';

// MONGODB_URL="mongodb+srv://chavhanpranay:7774860123@cluster0.mt1t8k5.mongodb.net/?retryWrites=true&w=majority"




dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// app.use('/api/v1/post', postRoutes);
// app.use('/api/v1/dalle', dalleRoutes);


app.get('/movie/popular', async (req, res) => {
  try {
    // Fetch all popular movies from the "popular_movies" collection
    const popularMovies = await Flash.find();

    if (!popularMovies || popularMovies.length === 0) {
      return res.status(404).json({ message: 'No popular movies found.' });
    }

    // If movies are found, return the data as a response
    res.json(popularMovies);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a generic error response without exposing sensitive information
    res.status(500).json({ message: 'Server error occurred.' });
  }
});


app.get('/movie/top_rated', async (req, res) => {
  try {
    // Fetch all popular movies from the "popular_movies" collection
    const popularMovies = await TopRated.find();

    if (!popularMovies || popularMovies.length === 0) {
      return res.status(404).json({ message: 'No popular movies found.' });
    }

    // If movies are found, return the data as a response
    res.json(popularMovies);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a generic error response without exposing sensitive information
    res.status(500).json({ message: 'Server error occurred.' });
  }
});

app.get('/movie/upcoming', async (req, res) => {
  try {
    // Fetch all popular movies from the "popular_movies" collection
    const popularMovies = await Upcoming.find();

    if (!popularMovies || popularMovies.length === 0) {
      return res.status(404).json({ message: 'No popular movies found.' });
    }

    // If movies are found, return the data as a response
    res.json(popularMovies);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a generic error response without exposing sensitive information
    res.status(500).json({ message: 'Server error occurred.' });
  }
});

app.get('/cast', async (req, res) => {
  try {
    // Fetch all popular movies from the "popular_movies" collection
    const popularMovies = await Credits.find();

    if (!popularMovies || popularMovies.length === 0) {
      return res.status(404).json({ message: 'No popular movies found.' });
    }

    // If movies are found, return the data as a response
    res.json(popularMovies);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a generic error response without exposing sensitive information
    res.status(500).json({ message: 'Server error occurred.' });
  }
});

app.get('/cast/:id', (req, res) => {
  const id = req.params.id;
  const movie = Credits.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  const movieId = movie.id;
  const movieCredits = Credits.find((credit) => credit.movieId === movieId);

  if (!movieCredits) {
    return res.status(404).json({ error: 'Credits not found for this movie' });
  }

  res.json({ movie, credits: movieCredits.cast });
});



app.get('/movie/:id', async (req, res) => {
  const movieId = parseInt(req.params.id);

  try {
    // Use the aggregation framework to find the movie by its ID in the nested "results" array
    const movie = await Flash.aggregate([
      {
        $unwind: '$results', // Unwind the "results" array
      },
      {
        $match: { 'results.id': movieId }, // Find the movie by its ID
      },
      {
        $project: { _id: 0, 'results._id': 0 }, // Exclude unnecessary fields from the output
      },
    ]);

    if (movie.length === 0) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    // If the movie is found, return its details as a response
    res.json(movie[0].results);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a more detailed error response with the actual error message
    res.status(500).json({ message: 'Server error occurred.', error: err.message });
  }
});



app.get('/castttt/:id', async (req, res) => {
  const movieId = parseInt(req.params.id);

  try {
    // Use the aggregation framework to find the movie by its ID in the nested "results" array
    const movie = await Credits.aggregate([
      {
        $match: { 'id': movieId }, // Find the movie by its ID
      },
    ]);

    if (movie.length === 0) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    // If the movie is found, return its details as a response
    res.json(movie[0].results);
  } catch (err) {
    // Handle any errors that occur during the database query or processing
    console.error(err);

    // Send a more detailed error response with the actual error message
    res.status(500).json({ message: 'Server error occurred.', error: err.message });
  }
});



app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from CineTicket...!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
