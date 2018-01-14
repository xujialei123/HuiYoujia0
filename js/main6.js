require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'cart':'cart'
		
		
	}
})
require(['jquery','cookie','common','cart'],function($,cookie,common,cart){
	$(function(){
		common.loadpage()
		common.scroll()
		common.link()
		cart.add()
		
		})

})
