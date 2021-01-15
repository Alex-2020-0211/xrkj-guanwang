const path = require('path')


module.exports = {
	// publicPath: "/", // 部署到根目录
	// publicPath: '/xrkj/', // 部署到xrkj 子目录
	outputDir: 'www',
	// assetsDir: 'static',
	// lintOnSave: false, 
	productionSourceMap: false,
	devServer: {
		// port: '8080',
		open: true,
		// host:'192.168.15.112',
		proxy: {
			'/api': {
				// target: `http://192.168.15.102:8094`, // 桃夭
				// target: `http://www.niceteam.com.cn`, //正式
				target: `manager.niceteam.com.cn`, //正式
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api',
				}
			},
		}
		// after: require('./mock/mock-server.js')
	},
}