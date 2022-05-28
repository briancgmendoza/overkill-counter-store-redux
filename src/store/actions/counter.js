import * as actionTypes from "./actionTypes";

export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionTypes.DECREMENT };
};

export const add = () => {
  return { type: actionTypes.ADD, payload: 10 };
};

export const subtract = () => {
  return { type: actionTypes.SUBTRACT, payload: 15 };
};
