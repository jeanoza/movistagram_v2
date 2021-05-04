import { combineReducers } from "redux";
import movie from "./movie_reducer";
import tv from "./tv_reducer";

const rootReducer = combineReducers({
  movie,
  tv,
});

export default rootReducer;
