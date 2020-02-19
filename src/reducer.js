import { INCREASE, DECREASE } from "./contstants";

const initialState = { count: 0 };

const increase = (state, action) => {
  return {
    ...state,
    count: state.count + 1
  };
};
const decrease = (state, action) => {
  console.log(state, action);
  return {
    ...state,
    count: state.count - 1
  };
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return increase(state, action);
    case DECREASE:
      return decrease(state, action);
    default:
      return state;
  }
};
export default reducer;
