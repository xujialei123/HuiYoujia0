require.config({
	paths:{
		'jquery':"jquery-1.11.3",
		'cookie':"jquery.cookie",
		'common':'common',
		'index':"index",
		
	}
})
require(['jquery','cookie','index','common','login'],function($,cookie,index,common){
	$(function(){
		new index.fn('lunbo1');
		new index.fn('lunbo2');
		index.clone();
		index.clone2();
		new index.fn('lunbo3');
		new index.fn('lunbo4');
		new index.fn('lunbo5');
		new index.fn('lunbo6');
		common.scroll(),
		index.link(),
		index.time
		})
	
})
