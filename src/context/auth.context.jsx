import React, { useContext, useMemo, useReducer } from "react";
const AuthStateContext = React.createContext(undefined);
const AuthDispatchContext = React.createContext(undefined);
function useAuthState() {
  const auth = useContext(AuthStateContext);

  if (auth === undefined) {
    throw new Error("useAuthState can only be used inside AuthProvider");
  }

  return auth;
}

function useAuthDispatch() {
  const auth = useContext(AuthDispatchContext);

  if (auth === undefined) {
    throw new Error("useAuthDispatch can only be used inside AuthProvider");
  }

  return auth;
}

function authReducer(state, action) {
  switch (action.type) {
    case "SET_WEATHER_DETAILS": {
      return { ...state, weatherDetails: action.payload };
    }
    case "SET_WEATHER_RESULT": {
      return { ...state, weatherResult: action.payload };
    }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, {
    weatherDetails: {},
    weatherResult: "",
  });

  const memoedAuth = useMemo(() => auth, [auth]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <AuthStateContext.Provider value={memoedAuth}>
      <AuthDispatchContext.Provider value={memoedDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export { AuthProvider, useAuthDispatch, useAuthState };
