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

export const addExample = example => dispatch => {
  axios
  .post('/api/examples', example)
  .then(res =>
    dispatch({
      type: ADD_EXAMPLE,
      payload: res.data
    })
  )
};

export const showExample = id => dispatch => {
  axios
  .get(`/api/examples/${id}`)
  .then(res =>
    dispatch({
      type: SHOW_EXAMPLE,
      payload: res.data
    })
  )
};

export const deleteExample = id => dispatch => {
  axios
  .delete(`/api/examples/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_EXAMPLE,
      payload: id
    })
  )
  return {
    type: DELETE_EXAMPLE,
    payload: id
  };
};

export const setExamplesLoading = () => {
  return {
    type: EXAMPLES_LOADING
  }
}
