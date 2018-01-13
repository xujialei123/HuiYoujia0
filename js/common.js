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
		$('body a').attr('href','product.html')
		$('body .login').attr('href','login.html')
		$('body .register').attr('href','register.html')
		$('body .index').attr('href','../index.html')
		$('.gwc').click(function(){
			location.href = 'cart.html'
		})
	}
	return {
		scroll:scroll,
		link:link
	}
	
})