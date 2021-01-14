import axios from 'axios'
import {
	Notification
} from 'element-ui'

let token = ''

axios.defaults.withCredentials = false
axios.defaults.headers.common['token'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' //配置请求头

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(
	function (config) {
		let token = window.localStorage.getItem('token')
		if (token) {
			//将token放到请求头发送给服务器,将tokenkey放在请求头中
			config.headers.Authorization = token
			//也可以这种写法
			config.headers['token'] = token
		}
		return config
	},
	function (error) {
		Notification({
			title: '温馨提示',
			message: '请求超时',
			type: 'warning'
		})
		// Do something with request error
		return Promise.reject(error)
	}
)

// 添加一个响应拦截器
axios.interceptors.response.use(
	function (response) {
		if (response.data && response.data.code == 401) {
			return false
			// }
		} else if (response.data.code != 200) {
			Notification({
				title: '温馨提示',
				message: '未知错误',
				type: 'warning'
			})
			// Toast.fail(msg);
			return
		}
		return response
	},
	function (error) {
		// console.log(error)
		Notification({
			title: '温馨提示',
			message: '未知错误',
			type: 'warning'
		})

		return Promise.reject(error)
	}
)

// let base = process.env.VUE_APP_API_HOST
let base = 'http://192.168.15.102:8094'
//通用方法
export const POST = (url, params) => {
	// const getTimestamp = new Date().getTime();
	// return axios.post(`${base}${url}?timer=${getTimestamp}`, params).then(res => res.data)
	return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
	// const getTimestamp = new Date().getTime();
	// return axios.get(`${base}${url}?timer=${getTimestamp}`, { params: params }).then(res => res.data)
	return axios.get(`${base}${url}`, {
		params: params
	}).then(res => res.data)
}

export const PUT = (url, params) => {
	return axios
		.put(`${base}${url}`, params)
		.then(res => res.data)
		.catch(error => error)
}

export const DELETE = (url, params) => {
	return axios.delete(`${base}${url}`, {
		params: params
	}).then(res => res.data)
}

export const PATCH = (url, params) => {
	return axios.patch(`${base}${url}`, params).then(res => res.data)
}