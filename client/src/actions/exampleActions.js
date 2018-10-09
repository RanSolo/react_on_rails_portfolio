import axios from 'axios'
import {GET_EXAMPLES, ADD_EXAMPLE, DELETE_EXAMPLE, EXAMPLES_LOADING } from './types';

export const getExamples = () => dispatch => {
  dispatch(setExamplesLoading());
  axios
    .get('/api/examples')
    .then(res =>
      dispatch({
        type: GET_EXAMPLES,
        payload: res.data
      })
    )
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
