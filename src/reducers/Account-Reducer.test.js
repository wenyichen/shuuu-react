import expect from 'expect';
import accountReducer from './Account-Reducer';
import * as actions from '../actions/Account-Actions';


describe('Account Reducer', () => {
  it('should add account when passed CREATE_ACCOUNT_SUCCESS', () => {
    // arrange
    const initialState = [
      {name: 'John'},
      {name: 'Justin'}
    ];

    const newAccount = {name: 'Qingchen'};

    const action = actions.create_account(newAccount);

    //act
    const newState = accountReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('John');
    expect(newState[1].name).toEqual('Justin');
    expect(newState[2].name).toEqual('Qingchen');
  });

  it('should update account when passed UPDATE_ACCOUNT_SUCCESS', () => {
    // arrange
    const initialState = [
      {name: 'John', tel: '1234567890'}
      {name: 'Justin', tel: '1111111111'}
    ];

    const account = {id: 'John', tel: '0987654321'};
    const action = actions.update_account(account);

    // act
    const newState = accountReducer(initialState, action);
    const updatedAccount = newState.find(a => a.tel == account.tel);
    const untouchedAccount = newState.find(a => a.tel == '1234567890');

    // assert
    expect(updatedAccount.tel).toEqual('0987654321');
    expect(untouchedAccount.tel).toEqual('1234567890');
    expect(newState.length).toEqual(2);
  });
});
