import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-EN",
  },
});
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: (id) => api.get(`movie/${id}`),
};

export const tvsApi = {
  airingToday: () => api.get("tv/airing_today"),
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  detail: (id) => api.get(`tv/${id}`),
};
