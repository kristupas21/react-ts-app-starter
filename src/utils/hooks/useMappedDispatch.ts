import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const useMappedDispatch = <T>(map: T): T => {
  const dispatch = useDispatch();

  return useMemo(() =>
    Object.entries(map).reduce((acc, [key, action]) => ({
      ...acc,
      [key]: (...args) => dispatch(action(...args)),
    }), {}) as T, [dispatch]);
};

export default useMappedDispatch;
