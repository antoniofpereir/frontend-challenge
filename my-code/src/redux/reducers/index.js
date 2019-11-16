import * as ACTIONS from '../actions/actionTypes';
import change from '../../utils/immutable';

const initialState = {
  test: 'test initial',
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_TEST_VALUE: {
      const test = action.payload;
      return change(state, { test });
    }
    default:
      return state;
  }
}
