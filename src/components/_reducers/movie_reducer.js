//types
const MV_NOW_PLAYING = "movie/now_playing";
const MV_UPCOMING = "movie/upcoming";
const MV_POPULAR = "movie/popular";

const movie_reducer = (state = {}, action) => {
  switch (action.type) {
    case MV_NOW_PLAYING:
      return { ...state, nowPlaying: action.results };
    case MV_UPCOMING:
      return { ...state, upcoming: action.results };
    case MV_POPULAR:
      return { ...state, popular: action.results };
    default:
      return state;
  }
};
export default movie_reducer;
