const path = require('path')


module.exports = {
	// publicPath: "/", // 部署到根目录
	// publicPath: '/xrkj/', // 部署到xrkj 子目录
	outputDir: 'dist',
	// assetsDir: 'static',
	// lintOnSave: false, 
	productionSourceMap: false,
	devServer: {
		port: '8080',
		open: true,
		host:'192.168.15.112',
		proxy: {
			'/login': {
				target: `http://192.168.15.102:8094`, // 桃夭
				// target: `http://192.168.15.134:8086`, // 雾
				// target: `http://buyshowopen.xirenkeji.com`, //正式
				// target: `http://opentest.xiduoduo999.cn`, //
				changeOrigin: true,
				pathRewrite: {
					'^/login': '/login',
				}
			},
		}
		// after: require('./mock/mock-server.js')
	},
}
