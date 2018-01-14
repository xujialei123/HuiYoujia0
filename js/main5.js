require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'wupin':'wupin'
		
		
	}
})
require(['jquery','cookie','common','wupin'],function($,cookie,common,wupin){
	$(function(){
		common.scroll()
		common.link()
		common.loadpage()
		wupin.play()
		})

})
