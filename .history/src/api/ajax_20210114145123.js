import Axios from 'axios'
import Config from '../../config/axios.config'
// import App from '../app.js'
import Future from "./future.js";
import { Loading } from 'element-ui';
import { Notification } from 'element-ui';
// 上传文件的配置fileUploadConfig
var fileUploadConfig = {
    baseURL: "http://192.168.15.102:8093",
    // baseURL: "http://192.168.0.139:12345/",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': window.localStorage.getItem('platform_token') ? window.localStorage.getItem('platform_token') : ''
    }
}
var LoadingInstance = {};
// 数据请求之前
Axios.interceptors.request.use((config) => {
    LoadingInstance = Loading.service({
        fullscreen: true,
        text: "玩命加载中..."
    });//loading调用
    // var token = window.localStorage.getItem('platform_token');
    // if (token !== undefined && token !== 'undefined' && token !== '' && token !== null) {
    //     config.headers.token = token;
    // } else {
    //     console.info('platform_token not found');
    // }
    return config;
});
// 提交成功并返回数据时
Axios.interceptors.response.use(function (response) {   
    return response;
}, function (error) {
    console.log(error); 
    Notification({
        title: '请求提示',
        message: '服务器异常',
        type: 'warning'
    });
    LoadingInstance.close();
    return Promise.reject(error);
});

class Ajax {
    static ResponseHandle(F, res, showLoadingBoolean) {
        // 解决loading多次显示的问题
        if (showLoadingBoolean || showLoadingBoolean == undefined) {
            if (LoadingInstance._isVue) {
                LoadingInstance.close();
            }
        }
        switch (res.data.Error) {
            case 1:
                Notification({
                    title: '请求提示',
                    message: res.data.Msg,
                    type: 'warning'
                });
                F.reject(res.data.Msg);
                break;
            case 2:
                window.localStorage.user_status = 'platform_admin_pc_outlogin';
                // App.$router.push('/login');
                break;
            default:
                F.resolve(res.data.Data);
                break;
        }
    }
    static Post(url, data, showLoadingBoolean) {
        var F = new Future();
        Axios.post(url, data, Config)
            .then((res) => {
                Ajax.ResponseHandle(F, res, showLoadingBoolean);
            })
            .catch((e) => {
                F.reject(e);
            });
        return F;
    }
    static upLoadFile(url, data, showLoadingBoolean) {
        var F = new Future();
        Axios.post(url, data, fileUploadConfig)
            .then((res) => {
                Ajax.ResponseHandle(F, res, showLoadingBoolean);
            })
            .catch((e) => {
                console.info(e);
                F.reject(e);
            });
        return F;
    }
    static Get(url, showLoadingBoolean) {
        var F = new Future();
        Axios.get(url, Config)
            .then((res) => {
                Ajax.ResponseHandle(F, res, showLoadingBoolean);
            })
            .catch((e) => {
                F.reject(e);
            });
        return F;
    }
}

export default Ajax;