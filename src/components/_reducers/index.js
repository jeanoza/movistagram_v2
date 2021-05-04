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

import { combineReducers } from "redux";
import movie from "./movie_reducer";
import tv from "./tv_reducer";

const rootReducer = combineReducers({
  movie,
  tv,
});

export default rootReducer;
