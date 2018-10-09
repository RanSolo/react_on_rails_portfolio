import uuid from 'uuid';
import {GET_EXAMPLES, ADD_EXAMPLE, DELETE_EXAMPLE } from '../actions/types';

const initialState = {
  examples: [
    { id: uuid(), title: 'RESTful API creation' },
    { id: uuid(), title: 'Webstack: Rails 5.2 API, ActiveAdmin CMS, React Front End' }
  ]
};


export default function(state = initialState, action) {
  switch(action.type) {
    case GET_EXAMPLES:
      return {
        ...state
      }
    default:
      return state;
  }
}
