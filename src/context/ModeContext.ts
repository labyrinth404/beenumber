import { createContext } from "react";
import { IReducerMode } from "../types";
const ModeContext = createContext<IReducerMode>({});

export default ModeContext;
