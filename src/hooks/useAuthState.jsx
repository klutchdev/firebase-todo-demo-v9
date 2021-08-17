/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import useLoadingValue from "./useLoadingValue";

const useAuthState = (auth) => {
  const { error, loading, value, setError, setValue } = useLoadingValue(() => auth.currentUser);
  const resArray = [value, loading, error];

  useEffect(() => {
    const listener = onAuthStateChanged(auth, setValue, setError);

    return () => {
      listener();
    };
  }, [auth]);

  return useMemo(() => resArray, [value, loading, error]);
};

export default useAuthState;
