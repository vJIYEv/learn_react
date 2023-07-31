import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  const dispatch = function(action) {
    setState(reducer(state, action));
  };
  return [state, dispatch];
}