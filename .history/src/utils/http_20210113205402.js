'use strict'

import axios from 'axios'
import qs from 'qs'
// import { param2Obj } from "./index"
import { getToken } from '@/utils/auth'

// axios.defaults.baseURL = "http://192.168.15.117:8083"; // 关键步骤–填写后台请求统一的地址
axios.interceptors.request.use(
	config => {
		// loading
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.resolve(error.response)
	}
)

function checkStatus(response) {
	// loading
	// 如果http状态码正常，则直接返回数据
	// console.log(response)
	if ((response && response.status === 200) || response.status === 304 || response.status === 400) {
		return response.data
		// 如果不需要除了data之外的数据，可以直接 return respnse.data
	}
	// 异常状态下，把错误信息返回回去
	return {
		status: -404,
		msg: '网络异常'
	}
}

function checkCode(res) {
	// 如果code异常（这里已经包括网络错误，服务器错误，后端抛出的错误），可以弹出一个错误提示，告诉用户
	if (res.status === -400) {
		// alert(res.msg)
		// console.log(res)
	}
	if (res.data && !res.state) {
		// alert(res.message)
		// console.log(res.message)
	}
	return res
}

export default {
	post(url, data) {
		return axios({
			method: 'post',
			baseURL: '',
			// url: '/bhpcAdmin' + url,
			url: "http://192.168.15.102:8094" + url,
			data: qs.stringify(data),
			timeout: 30000,
			headers: {
				'X-requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				// "X-Auth": "token=D159A6B82DC80B56D1F2A87F6CDE7A00"
				// "X-Auth": data["X-Auth"]
				// "X-Auth": param2Obj(window.location.search)["X-Auth"]
				'X-Auth': getToken()
			},
			withCredentials: true // 允许携带cookie
		})
			.then(response => {
				console.log('让我看看post返回了啥：：：')
				console.log(response)
				return checkStatus(response)
			})
			.then(res => {
				return checkCode(res)
			})
	},
	postJson(url, data) {
		console.log(data)
		return axios({
			method: 'post',
			baseURL: '',
			// url: '/bhpcAdmin' + url,
			url: "http://192.168.15.102:8094" + url,
			data: data,
			timeout: 30000,
			headers: {
				'X-requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json; charset=UTF-8',
				// "X-Auth": "token=D159A6B82DC80B56D1F2A87F6CDE7A00"
				// "X-Auth": data["X-Auth"]
				// "X-Auth": param2Obj(window.location.search)["X-Auth"]
				'X-Auth': getToken()
			},
			withCredentials: true // 允许携带cookie
		})
			.then(response => {
				console.log('让我看看post返回了啥：：：')
				console.log(response)
				return checkStatus(response)
			})
			.then(res => {
				return checkCode(res)
			})
	},
	get(url, params) {
		return axios({
			method: 'get',
			baseURL: '',
			// url: '/bhpcAdmin' + url,
			url: "http://192.168.15.102:8094" + url,
			params, // get 请求时带的参数
			timeout: 30000,
			headers: {
				'X-Request-With': 'XMLHttpRequest',
				// "X-Auth": "token=D159A6B82DC80B56D1F2A87F6CDE7A00"
				// "X-Auth": param2Obj(window.location.search)["X-Auth"]
				'X-Auth': getToken()
			},
			withCredentials: true // 允许携带cookie
		})
			.then(response => {
				console.log('让我看看get返回了啥啥啥：：：：')
				console.log(response)
				return checkStatus(response)
			})
			.then(res => {
				return checkCode(res)
			})
	}
}
