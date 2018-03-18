import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const accounts = [
  {
    id: '0',
    name: 'Qingchen Dang',
    phone: '1234',
    password: '1234',
    trips: [0]
  },
  {
    id: '1',
    name: 'Wenyi Chen',
    phone: '0987',
    password: '5678',
    trips: [1]
  },
  {
    id: '2',
    name: 'Justin Kim',
    phone: '1029',
    password: '4857',
    trips: [0,1]
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (account) => {
  return  '0' + account.name + account.phone + account.password + '0';
};

class AccountApi {
  static getAllAccounts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], accounts));
      }, delay);
    });
  }

  static saveTripToAccount(aid, tripid) {
    
  }

  static saveAccount(account) {
    account = Object.assign({}, account); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (account.id) {
          const existingAccountIndex = accounts.findIndex(a => a.id == account.id);
          accounts.splice(existingAccountIndex, 1, account);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new accounts in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          account.id = generateId(account);
          console.log(accounts);
          accounts.push(account);
        }

        resolve(account);
      }, delay);
    });
  }

  static deleteAccount(AccountId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAccountToDelete = accounts.findIndex(account => {
          return account.AccountId == AccountId;
        });
        accounts.splice(indexOfAccountToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AccountApi;
