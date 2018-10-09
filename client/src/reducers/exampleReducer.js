import uuid from 'uuid';
import {GET_EXAMPLES, ADD_EXAMPLE, DELETE_EXAMPLE, EXAMPLES_LOADING } from '../actions/types';

const initialState = {
  examples: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_EXAMPLES:
      return {
        ...state,
        examples: action.payload,
        loading: false
      };
    case DELETE_EXAMPLE:
      return {
        ...state,
        examples: state.examples.filter(example => example.id !== action.payload)
      };
    case ADD_EXAMPLE:
      return {
        ...state,
        examples: [action.payload, ...state.examples]
      };
    case EXAMPLES_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
