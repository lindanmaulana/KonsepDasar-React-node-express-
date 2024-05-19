import { createContext, useReducer } from "react";

const TotalClassesContext = createContext(null);

const TotalClassesDispatchContext = createContext(null);

export const TotalClassesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }

    default: {
      throw Error("unknow action: " + action.type);
    }
  }
};

export const TotalClassesProvider = ({ children }) => {
  const [totalClasses, dispatch] = useReducer(TotalClassesReducer, {
    total: 0,
  });

  return (
    <TotalClassesContext.Provider value={totalClasses}>
      <TotalClassesDispatchContext.Provider value={dispatch}>
        {children}
      </TotalClassesDispatchContext.Provider>
    </TotalClassesContext.Provider>
  );
};

export const TotalClasses = TotalClassesContext
export const TotalClassesDispatch = TotalClassesDispatchContext
