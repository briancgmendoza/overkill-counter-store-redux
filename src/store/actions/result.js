import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
  return { type: actionTypes.STORE_RESULT, result };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    dispatch(saveResult(result));
  };
};

export const deleteResult = (id) => {
  return { type: actionTypes.DELETE_RESULT, elementId: id };
};
