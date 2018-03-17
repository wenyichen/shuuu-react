import {combineReducers} from 'redux'
import {
  CREATE_ACCOUNT,
  EDIT_ACCOUNT
} from './Account-Actions'


function account_reducer(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [
        ...state,
        {
          
        }
      ]

    case types.LOAD_ACCOUNT:
      return action.account;

    case EDIT_ACCOUNT:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo,
            {
              completed: !todo.completed
            }
          )
        }
        return todo
      })
    default:
      return state
  }
}
