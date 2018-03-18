import expect from 'expect';
import * as accountActions from './actionActions';
import * as types from './actionTypes';

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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_ACCOUNT_SUCCESS when loading accounts', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_ACCOUNT_SUCCESS,
        body: {accounts:
          [{
            name: 'John',
            tel: '1234567890',
            password: 'abcdefg'
          }]
        }
      }
    ];

    const store = mockStore({accounts: []}, expectedActions, done);
    store.dispatch(accountActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_ACCOUNT_SUCCESS);
      done();
    });
  });
});
