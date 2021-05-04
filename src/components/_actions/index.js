import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: "en-EN",
  },
});
//movie types
const MV_NOW_PLAYING = "movie/now_playing";
const MV_UPCOMING = "movie/upcoming";
const MV_POPULAR = "movie/popular";
const MV_DETAIL = "movie/";

//tv types
const TV_AIRING_TODAY = "tv/airing_today";
const TV_POPULAR = "tv/popular";
const TV_TOP_RATED = "tv/top_rated";
const TV_DETAIL = "tv/";

//movie action obj
export const movieAction = {
  nowPlaying: (dispatch) => {
    api
      .get(MV_NOW_PLAYING)
      .then((response) => {
        dispatch({
          type: MV_NOW_PLAYING,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  upcoming: (dispatch) => {
    api
      .get(MV_UPCOMING)
      .then((response) => {
        dispatch({
          type: MV_UPCOMING,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  popular: (dispatch) => {
    api
      .get(MV_POPULAR)
      .then((response) => {
        dispatch({
          type: MV_POPULAR,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  detail: (dispatch, id) => {
    api.get(`${MV_DETAIL}/${id}`).then((response) => {
      dispatch({
        type: MV_DETAIL,
        results: response.data,
      });
    });
  },
};

//tv action obj
export const tvAction = {
  airingToday: (dispatch) => {
    api
      .get(TV_AIRING_TODAY)
      .then((response) => {
        dispatch({
          type: TV_AIRING_TODAY,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  topRated: (dispatch) => {
    api
      .get(TV_TOP_RATED)
      .then((response) => {
        dispatch({
          type: TV_TOP_RATED,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  popular: (dispatch) => {
    api
      .get(TV_POPULAR)
      .then((response) => {
        dispatch({
          type: TV_POPULAR,
          results: response.data.results,
        });
      })
      .catch((e) => console.log(e));
  },
  detail: (dispatch, id) => {
    api.get(`${TV_DETAIL}/${id}`).then((response) => {
      dispatch({
        type: TV_DETAIL,
        results: response.data,
      });
    });
  },
};
