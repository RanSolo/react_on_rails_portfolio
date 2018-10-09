import uuid from 'uuid';
import {GET_EXAMPLES, ADD_EXAMPLE, DELETE_EXAMPLE } from '../actions/types';

const initialState = {
  examples: [
    { id: uuid(), title: 'RESTful API creation', description: 'From scratch', steps: 8 },
    { id: uuid(), title: 'Webstack: Rails 5.2 API, ActiveAdmin CMS, React Front End' }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_EXAMPLES:
      return {
        ...state
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
      }
    default:
      return state;
  }
}
