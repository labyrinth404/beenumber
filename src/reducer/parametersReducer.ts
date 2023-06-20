import { calculateIteration } from "../utils";
import { IActionTypeParameters, initialState } from "../constant";
import type { IGameParameters, IActionParameters } from "../types";

const parametersReducer = (
  state: IGameParameters,
  action: IActionParameters
) => {
  const { init, setMax, setMin, setSelectNumber, setVariant, reset } =
    IActionTypeParameters;
  switch (action.type) {
    case init:
      return {
        ...action.payload,
        selectNumber:
          Math.ceil(Math.random() * action.payload.max) +
          initialState.subMode.interationInc,
        interation: calculateIteration(action.payload.max),
      };
    case setMax:
      return {
        ...state,
        max: action.payload,
        interation: calculateIteration(action.payload),
      };
    case setMin:
      return {
        ...state,
        min: action.payload,
      };
    case setSelectNumber:
      return {
        ...state,
        selectNumber: action.payload,
      };
    case setVariant: {
      if (state.stackVariant.some((variant) => variant === action.payload)) {
        return { ...state };
      } else {
        return {
          ...state,
          variant: action.payload,
          stackVariant: [...state.stackVariant, action.payload],
        };
      }
    }
    case reset:
      return initialState.parameters;
    default:
      return state;
  }
};

export default parametersReducer;
