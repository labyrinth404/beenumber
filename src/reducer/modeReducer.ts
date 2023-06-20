import { IActionTypeMode, Mode, initialState } from "../constant";
import type { IActionMode } from "../types";

const modeReducer = (state: Mode, action: IActionMode) => {
  const { init, setMode, reset } = IActionTypeMode;
  switch (action.type) {
    case init:
      return action.payload;
    case setMode:
      return action.payload;
    case reset:
      return initialState.mode;
    default:
      return state;
  }
};

export default modeReducer;
