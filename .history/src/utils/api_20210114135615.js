import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "http://192.168.15.102:8093" //桃夭

// get请求
export function getListAPI(params) {
    return http.get(`${resquest}/api/v1/sys/official/website/customer/joinsendcode`, params)
}
// post请求
export function postFormAPI(params) {
    return http.post(`${resquest}/postForm.json`, params)
}
// put 请求
export function putSomeAPI(params) {
    return http.put(`${resquest}/putSome.json`, params)
}
// delete 请求
export function deleteListAPI(params) {
    return http.delete(`${resquest}/deleteList.json`, params)
}