import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);
export const AuthDispatchContext = createContext(null);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        user: action.payload.user,
        pass: action.payload.pass,
      };
    }
    default: {
      throw Error("Unknow action : " + action.type);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [authContext, dispatch] = useReducer(AuthReducer, {
    user: 0,
    pass: 0,
  });
  return (
    <AuthContext.Provider value={authContext}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
