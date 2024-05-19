import { useContext } from "react";
import { AuthDispatchContext } from "../Context/AuthContext";

export const useAuthDispatchContext = () => {
  return useContext(AuthDispatchContext);
};
