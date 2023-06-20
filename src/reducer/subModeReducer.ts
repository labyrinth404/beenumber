import { IActionTypeMode, initialState } from "../constant";
import type { IActionSubMode, ISubMode } from "../types";

const modeReducer = (state: ISubMode, action: IActionSubMode) => {
  const { init, setMode, reset } = IActionTypeMode;
  switch (action.type) {
    case init:
      return action.payload;
    case setMode:
      return action.payload;
    case reset:
      return initialState.subMode;
    default:
      return state;
  }
};

export default modeReducer;
