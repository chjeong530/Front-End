'use strict';

// Callback Hell example
// class UserStorage{
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout( () => {
//       if (
//         (id === 'chan' && password === ' dream') ||
//         (id === 'coder' && password === ' academy')
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error('not found'));
//       }
//     }, 2000);
//   }

//   getRoles(user, onSuccess, onError) {
//     setTimeout( () => {
//       if (id === 'chan'){
//         onSuccess({ name:'chan', role:'admin'});
//       } else {
//         onError(new Error('no access'));
//       }
//     }, 1000);
//   }
// }

class UserStorage{
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        if (
          (id === 'chan' && password === ' dream') ||
          (id === 'coder' && password === ' academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        if (id === 'chan'){
          resolve({ name:'chan', role:'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);