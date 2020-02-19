import { DECREASE, INCREASE } from "./contstants";

export const onIncrease = () => ({ type: INCREASE });
export const onDecrease = () => ({ type: DECREASE });
export const onAyncIncrease = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREASE
      });
    }, 2000);
  };
};
