//获取浏览器类型
function getBrowserType(){
	var browser = {
	    versions: function () {
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {
	              	trident: u.indexOf('Trident') > -1, //IE内核
	              	presto: u.indexOf('Presto') > -1, //opera内核
	              	webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	              	gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	              	mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
	              	ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	              	android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	              	iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
	              	iPad: u.indexOf('iPad') > -1 || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1), //是否iPad
	              	weixin: u.match(/MicroMessenger/i), //微信浏览器
	              	webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	        };
	      }(),
	    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  	};
  	return browser;		
}

var is_weixin = false;
var is_ios = false;
var is_android = false;
var browser = getBrowserType();
do{
	if(browser.versions.weixin){		//微信
		is_weixin = true;
	}
	//安卓浏览器
	if(browser.versions.android){
		is_android = true;
		break;
	}
	//苹果浏览器
	if(browser.versions.ios||browser.versions.iphone||browser.versions.ipad){
		is_ios = true;
		break;
	}
}while(false);

// var ios_url = 'https://testflight.apple.com/join/QIyxFZ4X';
// //判断浏览器
// if(is_ios){
// 	location.href = ios_url;
// }

