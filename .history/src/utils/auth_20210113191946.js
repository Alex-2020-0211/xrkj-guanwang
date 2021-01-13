import Cookies from "js-cookie"

const TokenKey = "marketing_admin_token"
export function getToken() {
  // Cookies.set(TokenKey, "admin-token")
  return Cookies.get(TokenKey)
}
export function getCompanyToken(name) {
  return Cookies.get(name)
}
export function setCompanyToken(name,token) {
  return Cookies.set(name, token)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove()
}
export function removeCompanyToken(name) {
  return Cookies.remove(name)
}
