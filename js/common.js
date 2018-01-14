define(function(){
	function scroll(){
		window.onscroll=function(){
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop==0){
			$("#top").css('display','none')
		}else{
			$("#top").css('display','block').click(function(){
				document.documentElement.scrollTop=0
			})
			
		}
		}
		
	}	
	function link(){
		
		$('body .login').attr('href','login.html')
		$('body .register').attr('href','register.html')
		$('body .index').attr('href','../index.html')
		$('.gwc').click(function(){
			location.href = 'cart.html'
		})
	}
	function loadpage(){
		
		
		var cartstr = $.cookie('cart') ? $.cookie('cart'):"";
		var cartobj = strtoobj(cartstr);
		var num = 0 ;
		for(var id in cartobj){
			num+= parseInt(cartobj[id].num)
		}
		$('header a:eq(4)').html(num)
		$('.gwc span').html(num)
		if(Number($('.gwc span').html())!=0){
			$('.gwc div').css('display','none')
		}
	}
	function strtoobj(str){
		if(!str){
			return {}
		}else{
			return JSON.parse(str)
		}
	}
	return {
		scroll:scroll,
		link:link,
		loadpage:loadpage
	}
	
})