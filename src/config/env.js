/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl;


// 开发
if (process.env.NODE_ENV == 'development') {
	// 开发
	// baseUrl = '/apis/'; 
	baseUrl = 'http://api-blog.jiangxinglin.top/api/'; 
}else{
	//打包
	baseUrl = 'http://api-blog.jiangxinglin.top/api/'; 
}
// let routerMode = 'history';
let routerMode = 'hash';
let baseImgPath = 'http://api.jiangxinglin.top/';

export {
	baseUrl,
	routerMode,
	baseImgPath
}
