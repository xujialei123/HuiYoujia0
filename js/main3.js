require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'register':'register'
		
		
	}
})
require(['jquery','cookie','common','register'],function($,cookie,common,register){
	$(function(){
		common.scroll(),
		common.link(),
		common.loadpage(),
		register.register()
		})
	
})
