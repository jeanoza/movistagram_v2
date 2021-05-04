/*
//types
const PLUS = "PLUS";
const MINUS = "MINUS";

export const plus = () => ({
  type: PLUS,
});
export const minus = () => ({
  type: MINUS,
});
*/

import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-EN",
  },
});
//types
const MV_NOW_PLAYING = "movie/now_playing";
const MV_UPCOMING = "movie/upcoming";
const MV_POPULAR = "movie/popular";

// const actions = {};
// const getNowPlaying = () => {
//   return { type: NOW_PLAYING, data };
// };

export const getNowPlaying = (dispatch) => {
  api
    .get(MV_NOW_PLAYING)
    .then((response) => {
      dispatch({
        type: MV_NOW_PLAYING,
        results: response.data.results,
      });
    })
    .catch((e) => console.log(e));
};

export const getUpcoming = (dispatch) => {
  api
    .get(MV_UPCOMING)
    .then((response) => {
      dispatch({
        type: MV_UPCOMING,
        results: response.data.results,
      });
    })
    .catch((e) => console.log(e));
};

export const getPopular = (dispatch) => {
  api
    .get(MV_POPULAR)
    .then((response) => {
      dispatch({
        type: MV_POPULAR,
        results: response.data.results,
      });
    })
    .catch((e) => console.log(e));
};
