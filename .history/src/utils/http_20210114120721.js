import axios from 'axios'
// import qs from 'qs'
axios.interceptors.request.use(config => {
	let append = document.getElementsByName('body')
	append.innerHTML = '<img style="position:fixed;\n' +
		' left:47%;\n' +
		' top:40%;\n' +
		' transform: translateY(-50%),translateX(-50%);"' +
		' src="../../static/img/loading2.gif"/>'
	return config
}, err => {
	return Promise.resolve(err)
})

let base = 'http://192.168.15.102:8093' // 接口域名

export const request = (url, params, method, Func, isJson) => {
	// let _this = this;
	axios({
		method: method,
		url: `${base}${url}`,
		data: method === 'post' ? params : '',
		transformRequest: [function (data) {
			if (isJson === 1) {
				// debugger       // 判断是否json格式或者是表单提交形式
				return JSON.stringify(data)
			}
			let ret = ''
			for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret // 便于直接取到内部data
		}],
		headers: {
			// 认证和请求方式
			'Content-Type': isJson === 1 ? 'application/json' : 'application/x-www-form-urlencoded',
			'authorization': sessionStorage.getItem('principal'),
			'token': sessionStorage.getItem('token')
		},
		params: method === 'get' ? params : '',
	}).then(data => {
		console.log(data)
		if (data.data.code === 200) {
			Func(data.data.data)
		} else if (data.data.code === 406) {
			alert(data.data.message)
		} else if (data.data.code === 401) {
			window.location.href = '' //上线用这个地址
			//  window.location.href='/'
		} else if (data.data.code === 400 || data.data.code === 505 || data.data.code === 404 || data.data.code === 500) {
			alert('网络异常')
		} else if (data.data.code === 4011) {
			// window.location.href = '' //本地
			window.location.href = '' //线上
		} else if (data.data.code === 4012) {
			console.log(1111)
			request('token/refresh', {
				'authorization': sessionStorage.getItem('principal'),
				'refreshToken': sessionStorage.getItem('refreshToken')
			}, 'get', (res) => {
				//缓存新的token
				console.log(res)
				let token = res.token;
				let principal = res.principal;
				let refreshToken = res.refreshToken;
				sessionStorage.setItem("token", token);
				sessionStorage.setItem("principal", principal);
				sessionStorage.setItem("refreshToken", refreshToken);
				request(url, params, method, Func);
			});
		}
	})
}

// post
export const postRequest = (url, params, Func, isJson) => {
	request(url, params, 'post', Func, isJson)
}

// uploadFileRequest  图片上传
export const uploadFileRequest = (url, params) => {
	return axios({
		method: 'post',
		url: `${base}${url}`,
		data: params,
		headers: {
			'Content-Type': 'multipart/form-data',
			'authorization': sessionStorage.getItem('principal'),
			'token': sessionStorage.getItem('token')
			// 'authorization':'admin',
			// 'token':'740a1d6be9c14292a13811cabb99950b'
		}
	})
}

// get 

export const getRequest = (url, params, Func, isJson) => {
	request(url, params, 'get', Func, isJson)
}