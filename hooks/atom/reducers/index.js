import { loginUserReducers, initialStateLoginUser } from "./loginUser";
import { atomWithReducer } from "jotai/utils";

export const loginUserAtom = atomWithReducer(
  initialStateLoginUser,
  loginUserReducers
);
