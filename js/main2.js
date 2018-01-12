require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'login':'login'
		
	}
})
require(['jquery','cookie','common','login'],function($,cookie,common,login){
	$(function(){
		common.scroll();
		common.link(),
		login.blur()
		
		})
	
})
