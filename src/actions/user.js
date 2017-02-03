export function login(name, password) {
  return {
    type: 'user/LOGIN',
    payload: {
      request: {
        method: 'get',
        url: '/user/' + name + '/' + password,
      },
    }
  }
}
