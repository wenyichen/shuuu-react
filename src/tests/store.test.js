import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as accountActions from '../actions/accountActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const account = {
      name: 'John',
      tel: '1234567890',
      password: 'abcdefg'
    };

    // act
    const action = accountActions.create_account(account);
    store.dispatch(action);

    // assert
    const actual = store.getState().accounts[0];
    const expected = {
      name: 'John',
      tel: '1234567890',
      password: 'abcdefg'
    };

    expect(actual).toEqual(expected);
  });
});
