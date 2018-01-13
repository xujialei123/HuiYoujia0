require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'product':'product'
		
		
	}
})
require(['jquery','cookie','common','product'],function($,cookie,common,product){
	$(function(){
		common.scroll(),
		common.link(),
		product.clone(),
		product.click()
		})

})
