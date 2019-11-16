import * as ACTIONS from './actionTypes';

export function changeTestValue(newTestValue) {
  return {
    type: ACTIONS.CHANGE_TEST_VALUE,
    payload: newTestValue,
  };
};
