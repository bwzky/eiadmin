import cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return cookies.get(TokenKey)
}
export function setToken(token: string) {
  return cookies.set(TokenKey, token)
}
export function removeToken() {
  return cookies.remove(TokenKey)
}

export default { getToken, setToken, removeToken }
