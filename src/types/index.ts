import {
  IActionTypeParameters,
  IActionTypeMode,
  Mode,
  complexity,
} from "../constant";

export interface IGameParameters {
  min: number;
  max: number;
  interation: number;
  selectNumber: number;
  variant: number;
  stackVariant: number[];
}

export interface IActionParameters {
  type: IActionTypeParameters;
  payload: any;
}

export interface IActionMode {
  type: IActionTypeMode;
  payload: Mode;
}

export interface IActionSubMode {
  type: IActionTypeMode;
  payload: ISubMode;
}

export interface IReducer {
  state?: IGameParameters;
  dispatch?: React.Dispatch<IActionParameters>;
}

export interface IReducerMode {
  state?: Mode;
  dispatch?: React.Dispatch<IActionMode>;
}

export interface IReducerSubMode {
  state?: ISubMode;
  dispatch?: React.Dispatch<IActionSubMode>;
}

export interface ISubMode {
  complexity: complexity;
  interationInc: number;
  maxСonstraint: number;
}

export type TState = {
  parameters: IGameParameters;
  mode: Mode;
  subMode: ISubMode;
};

export type dataSwitch = {
  label: JSX.Element;
  value: complexity;
};
