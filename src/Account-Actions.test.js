import expect from 'expect';
import * as accountActions from './Account-Actions';
import * as types from './Action-Types';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';


// Test a sync action
describe('Account Actions', () => {
  describe('createAccountSuccess', () => {
    it('should create a CREATE_ACCOUNT_SUCCESS action', () => {
      //arrange
      const account =
      {
        name: 'John',
        tel: '1234567890',
        password: 'abcdefg'
      };


      const expectedAction = {
        type: types.CREATE_ACCOUNT_SUCCESS,
        account: account
      };

      //act
      const action = accountActions.create_account(account);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
