import axios from 'axios';

export function getUser(usuario: string) {
  var token = '422a1461d0b5d946813dcc85eeaf9110fa95b7bb';
  return axios.get('https://api.github.com/users/' + usuario, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}
