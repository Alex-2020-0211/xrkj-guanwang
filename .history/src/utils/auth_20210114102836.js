import Cookies from "js-cookie"

const TokenKey = "code-token"
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
export function checkPhone(phone, required) {
  if (required) { // 必须
    if (!phone) { 
      return false
    } else {
      if (!/^1[34578]\d{9}$/.test(phone)) {
        return false
      } else {
        return true
      }
    }
  } else {
    if (!phone) {
      return true
    } else {
      if (!/^1[34578]\d{9}$/.test(phone)) {
        return false
      } else {
        return true
      }
    }
  }
}
export function checkCode(code,required)

