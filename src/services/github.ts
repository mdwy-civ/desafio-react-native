import axios from 'axios';

export function getUser(usuario: string) {
  return axios.get('https://api.github.com/users/' + usuario, {
    headers: {
      Authorization: 'Bearer 422a1461d0b5d946813dcc85eeaf9110fa95b7bb',
    },
  });
}
