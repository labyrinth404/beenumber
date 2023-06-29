import { randomNumber } from "../utils";
import type { TState, ISubMode } from "../types";

export enum complexity {
  easy = "easy",
  normal = "normal",
  hard = "hard",
  lucky = "lucky",
}

export enum textResult {
  start = "загадал",
  win = "победа",
  under = "меньше",
  more = "больше",
  lose = "проиграл",
}
export enum colorResult {
  start = "black",
  win = "green",
  under = "gray",
  more = "gray",
  lose = "red",
}

export enum IActionTypeParameters {
  init = "initial",
  setup = "setup",
  setMax = "setMax",
  setMin = "setMin",
  setVariant = "setIteration",
  setSelectNumber = "setSelectNumber",
  reset = "reset",
}

export enum IActionTypeMode {
  init = "initial",
  setMode = "setMode",
  reset = "reset",
}

export const MARKS = [
  { value: 100, label: "100" },
  { value: 400, label: "400" },
  { value: 700, label: "700" },
  { value: 1000, label: "1000" },
  { value: 1300, label: "1300" },
];

export const GRADIENT = {
  youOracle: {
    from: "#ed6ea0",
    to: "#ec8c69",
    deg: 35,
  },
  imOracle: {
    from: "teal",
    to: "blue",
    deg: 60,
  },
};

export enum Mode {
  youOracle = "youOracle",
  imOracle = "imOracle",
  imOracleSetting = "imOracleSetting",
  youOracleSetting = "youOracleSetting",
  notSelected = "notSelected",
  youOracleLight = "youOracle",
  imOracleLight = "imOracleLight",
}

export enum complexityName {
  easy = "нуб",
  normal = "обыватель",
  hard = "профи",
  lucky = "везунчик",
}

export enum complexityImg {
  easy = "./img/m_easy4.png",
  normal = "./img/m_normal2.png",
  hard = "./img/m_hard2.png",
  lucky = "./img/m_lucky1.png",
}

export const heightIcon = 40;
export const DEFAULT_MAX = {
  MIN_VALUE: 16,
  HARD: 2048,
  LUCKY: 8096,
};

export const menuShemes = [
  {
    icon: "./img/mode1.svg",
    text: "Угадаю",
    gradient: GRADIENT.imOracle,
    width: 200,
    height: 200,
    class: "img-menu",
    params: {
      type: IActionTypeMode.setMode,
      payload: Mode.imOracleSetting,
    },
  },
  {
    icon: "./img/mode2.svg",
    text: "Загадываю",
    gradient: GRADIENT.youOracle,
    width: 200,
    height: 200,
    class: "img-menu",
    params: {
      type: IActionTypeMode.setMode,
      payload: Mode.youOracleSetting,
    },
  },
];

export const complexityShemes: Record<complexity, ISubMode> = {
  easy: {
    maxСonstraint: 128,
    interationInc: 2,
    complexity: complexity.easy,
  },
  normal: {
    maxСonstraint: 1024,
    interationInc: 0,
    complexity: complexity.normal,
  },
  hard: {
    maxСonstraint: 0,
    interationInc: -2,
    complexity: complexity.hard,
  },
  lucky: {
    maxСonstraint: 0,
    interationInc: -4,
    complexity: complexity.lucky,
  },
};

export const settingShemes = {
  imOracle: {
    label: "Максимальное число",
    icon: "./img/setting.png",
    dispatchModePayload: Mode.imOracle,
    dispatchParamPayload: (
      value: number,
      calculateIteration: Function,
      complexityShemes: any
    ) => {
      return {
        min: 1,
        max: value,
        interation: calculateIteration(value as number, complexityShemes),
        selectNumber: 0,
        variant: -1,
        stackVariant: [],
      };
    },
  },
  youOracle: {
    label: "Твое число",
    icon: "./img/setting2.png",
    dispatchModePayload: Mode.youOracle,
    dispatchParamPayload: (
      value: number,
      calculateIteration: Function,
      complexityShemes: any
    ) => {
      return {
        min: 1,
        max: value,
        interation: calculateIteration(value as number, complexityShemes),
        selectNumber: randomNumber(value),
        variant: -1,
        stackVariant: [],
      };
    },
  },
};

export const initialState: TState = {
  parameters: {
    min: 1,
    max: 128,
    interation: 7,
    selectNumber: 0,
    variant: -1,
    stackVariant: [],
  },
  mode: Mode.notSelected,
  subMode: complexityShemes.easy,
};
