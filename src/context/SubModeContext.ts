import { createContext } from "react";
import { IReducerSubMode } from "../types";
const SubModeContext = createContext<IReducerSubMode>({});

export default SubModeContext;
