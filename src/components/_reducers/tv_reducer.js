//types
const TV_AIRING_TODAY = "tv/airing_today";
const TV_POPULAR = "tv/popular";
const TV_TOP_RATED = "tv/top_rated";
const TV_DETAIL = "tv/";

const movie_reducer = (state = {}, action) => {
  switch (action.type) {
    case TV_AIRING_TODAY:
      return { ...state, airingToday: action.results };
    case TV_TOP_RATED:
      return { ...state, topRated: action.results };
    case TV_POPULAR:
      return { ...state, popular: action.results };
    case TV_DETAIL:
      return { ...state, detail: action.results };
    default:
      return state;
  }
};
export default movie_reducer;
