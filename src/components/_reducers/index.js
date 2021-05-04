/*
//types
const PLUS = "PLUS";
const MINUS = "MINUS";

const Reducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number + 1 };
    default:
      return state;
  }
};

export default Reducer;
*/
//types
const MV_NOW_PLAYING = "movie/now_playing";
const MV_UPCOMING = "movie/upcoming";
const MV_POPULAR = "movie/popular";

const Reducer = (state = {}, action) => {
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
export default Reducer;
