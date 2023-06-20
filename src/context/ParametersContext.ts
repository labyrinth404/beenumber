import { createContext } from "react";
import type { IReducer } from "../types";
const ParametersContext = createContext<IReducer>({});

export default ParametersContext;
