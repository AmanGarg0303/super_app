const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Action: {
    title: "Action",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  Drama: {
    title: "Drama",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  Romance: {
    title: "Romance",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  Thriller: {
    title: "Thriller",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  Western: {
    title: "Western",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  Horror: {
    title: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  Fantasy: {
    title: "Fantasy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  Music: {
    title: "Music",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  Fiction: {
    title: "Fiction",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
};
