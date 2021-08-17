/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useReducer } from "react";

const defaultState = (defaultValue) => {
  return {
    loading: defaultValue === undefined || defaultValue === null,
    value: defaultValue,
  };
};

const reducer = () => (state, action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
        value: undefined,
      };
    case "reset":
      return defaultState(action.defaultValue);
    case "value":
      return {
        ...state,
        error: undefined,
        loading: false,
        value: action.value,
      };
    default:
      return state;
  }
};

const useLoadingValue = () => {
  const defaultValue = undefined;
  const [state, dispatch] = useReducer(reducer(), defaultState(defaultValue));

  const reset = () => dispatch({ type: "reset", defaultValue });
  const setError = (error) => dispatch({ type: "error", error });
  const setValue = (value) => dispatch({ type: "value", value });

  const errState = state.error;
  const loadState = state.loading;
  const valState = state.value;

  return useMemo(
    () => ({
      reset,
      setError,
      setValue,
      error: errState,
      loading: loadState,
      value: valState,
    }),
    [errState, loadState, reset, setError, setValue, valState]
  );
};

export default useLoadingValue;
