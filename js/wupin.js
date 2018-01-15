define(function(){
	function play(){
		$.get('../json.json',function(data){
			$(data).each(function(index,value){
				var li = '<li><img src="../image/s'+(index+1)+'.jpg" alt="" /></li>';
			$('.small').append(li)
				$('.small li').click(function(){
					$('.big img').attr('src',$(this).find('img').attr('src'))
					$('.bigimg img').attr('src',$(this).find('img').attr('src'))
				})
			})
		})
		$('.big').hover(function(){
			$('.mark').css('display','block')
			$('.bigimg').css('display','block')
			$('.big').mousemove(function(event){
				var x=event.offsetX-100
				var y=event.offsetY-100;
				
				if(x<0){
					x=0
				}else if(x>260){
					x=260
				}if(y<0){
					y=0
				}else if(y>260){
					y=260
				}
				$('.mark').css({
					'left':x,
					'top':y
					
				})
				var px=x/260,py=y/260
				var x1 = -px*(800-460),y1=-py*(800-460);
				$('.bigimg img').css({
					left:x1,
					top:y1
				})			
			})		
		},function(){
			$('.mark').css('display','none')
			$('.bigimg').css('display','none')
		})
		
		
		var re = /^\d+$/
		$('.Num').val()>0
		$('.Num').blur(function(){
			if(re.test($('.Num').val())&&$('.Num').val()>0){
			$('.Num').val($('.Num').val())
		}else{
			$('.Num').val(1)
		}})
		
		$('.jian').click(function(){
			
			$('.Num').val($('.Num').val()-1)
		})
		$('.jia').click(function(){
			$('.Num').val(Number($('.Num').val())+1)
			
		})
		$('.add').click(function(){
			var id = $('.xinxi h3').attr('data-id');
			var name = $('.xinxi h3:eq(0)').text()
			var price =$('.jiage').text().slice(1);
			var num = Number($('.Num').val());
			var src = $('.big').find('img').attr('src')
			//获取cookie
			var cartstr = $.cookie('cart') ? $.cookie('cart') :"";
			var cartobj = strtoobj(cartstr);
			if(id in cartobj){
				cartobj[id].num+=Number(num);
			}else{
				cartobj[id] = {
					"name":name,
					"price":price,
					"num":num,
					"src":src
				}
			}
			$.cookie('cart',JSON.stringify(cartobj),{expires:7,path:"/"});
			$('.gwc span').html(cartobj[id].num)
		})
		
	
	}
	function strtoobj(str){
		if(!str){
					return {};
				}
				return JSON.parse(str);
	}
	return {
		play:play
	}
	
})