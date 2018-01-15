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
		$('a').attr('href','product.html')
		$('body .login').attr('href','login.html')
		$('body .register').attr('href','register.html')
		$('body .index').attr('href','../index.html')
		$('.gocart').attr('href','cart.html')
		$('#kefu,.jian,.jia').attr('href','javascript:;')
		
		$('#kefu').click(function(){
			 window.open ('kefu.html', 'newwindow', 'height=545, width=720, top=132, left=196, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
		})
		$('.gwc').click(function(){
			location.href = 'cart.html'
		})
	}
	function loadpage(){
		
		
		var cartstr = $.cookie('cart') ? $.cookie('cart'):"";
		var cartobj = strtoobj(cartstr);
		var num = 0 ;
		var src = null;
		var name = null;
		var price = null;
		for(var id in cartobj){
			num+= parseInt(cartobj[id].num);
			src = cartobj[id].src;
			name = cartobj[id].name;
			price =parseInt(cartobj[id].price)
		}
		$('header a:eq(4)').html(num)
		$('.gwc span').html(num)
		if(Number($('.gwc span').html())!=0){
			$('.gwc div:eq(0)').css('display','none')
			$('.gwc').hover(function(){
				$('.cartxiangqing').css('display','block')
			},function(){
				$('.cartxiangqing').css('display','none')
			})
			var str = `<dl>
							<dt>	
								<img src="${src}"/>
								<p>${name}</p>
							</dt>
							<dd>
								<p>${price}*${num}</p>
								<b class='delete'">删除</b>
							</dd>
						</dl>`;
				$('.cartlist').append(str);
				if(location.href=='http://127.0.0.1:8020/project/HuiJiaYou/index.html'){
					$('.cartlist').find('img').attr('src',cartobj[id].src.slice(3))
				}
				$('.gotocart font').html(num);
				$('.gotocart b').html(price*num)
				
				$('.delete').click(function(){
					$.removeCookie('cart',{expires:7,path:'/'})
					})
		}else{
			$('.gwc').hover(function(){
				$('.none').css('display','block')
			},function(){
				$('.none').css('display','none')
			})
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