import {GET_EXAMPLES, ADD_EXAMPLE, DELETE_EXAMPLE } from './types';

export const getExamples = () => {
  return {
    type: GET_EXAMPLES
  };
};

export const deleteExample = id => {
  return {
    type: DELETE_EXAMPLE,
    payload: id
  };
};

export const addExample = example => {
  return {
    type: ADD_EXAMPLE,
    payload: example
  };
};
