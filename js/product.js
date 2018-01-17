define(function(){
	
	function clone(){
		$.get('../product.json',function(data){
			$(data).each(function(index,value){
				var li = `<li>
						<a href="">
							<img src="../image/${value.src}.jpg" alt="" />
							<p title="${value.name}">${value.name}</p>
							<b><i>￥${value.price}</i>￥${value.origin}</b>
							<span>月销${value.num}件</span>	
						</a>
					</li>`;
					$('#product_list').append(li)
			})
		})
		for(var i=41;i<50;i++){
			var li =$('.rxb li:eq(0)').clone(true);
			li.find('img').attr('src','../image/'+i+'.jpg').css('border-top','none')
			$('.rxb').append(li)
		}
		for(var i = 51;i<=70;i++){
			var li=$("#like_box li:eq(0)").clone(true);
			li.find('img').attr('src','../image/'+i+'.jpg')
			$('#like_box ul').append(li)
		}
	}
	function click(){
		$('.more').click(function(){
			$(this).parent().siblings('.p2').css('display','block')
			$(this).css('display','none')
		})
		$('.close').click(function(){
		$(this).parent().css('display','none')
		$(this).parent().prev().find('.more').css('display','inline-block')
	})
		$('.l1').click(function(){	
			$('#product_list li').each(function(){
				$(this).prependTo('#product_list')
			})
//			$('#product_list li').get().reverse()
			$(this).css({
				'background':'#fff',
				'height':47,
				
			}).find('i').css('background-position-y',-10)
			$('.l1').not(this).css({
				'background':'transparent',
				'height':46
				
			})
		})
		$('.page a').click(function(){
			$(this).addClass('cur');
		})
		var left = 0;
		$('#like_box .left').click(function(){
			if(left==0){
				left = -3570
			}else{
				left+=1190
			}
			$('#like_box ul').animate({'left':left})
			return left
		})
		$('#like_box .right').click(function(){
			if(left==-3570){
				left = 0
			}else{
				left-=1190
			}
			$('#like_box ul').animate({'left':left})
			return left
		})
		
		$('#product_list a').attr('href','wupin.html')
		$('.rxb a').attr('href','wupin.html')
	
	}
	
	return {
		
		clone:clone,
		click:click
	}
})