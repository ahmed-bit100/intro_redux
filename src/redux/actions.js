import {COMPLETE, DECREMENT, DELETE, INCREMENT} from './actionTypes';

// these functions are called action creators, they return the action
// objects
export const inc = () => {
  return {
    type: INCREMENT,
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
  };
};

// todo correction

export const deleteTask = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};
