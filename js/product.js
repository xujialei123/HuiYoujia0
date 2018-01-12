define(function(){
	
	function clone(){
		for(var i = 2;i<=20;i++){
			var li = $('#product_list li:eq(0)').clone(true);
			li.find('img').attr('src','../image/'+i+'.jpg')
			$('#product_list').append(li)
		}
		for(var i=41;i<50;i++){
			var li =$('.rxb li:eq(0)').clone(true);
			li.find('img').attr('src','../image/'+i+'.jpg').css('border-top','none')
			$('.rxb').append(li)
		}
	}
	function click(){
//		var oLi = document.getElementById("product_list").getElementsByTagName('li')
//		var oUl = document.getElementById("product_list")
		$('.more').click(function(){
			$(this).parent().siblings('.p2').css('display','block')
			$(this).css('display','none')
		})
		$('.close').click(function(){
		$(this).parent().css('display','none')
		$(this).parent().prev().find('.more').css('display','inline-block')
	})
		$('.l1').click(function(){
//			$('#product_list li').remove()
//			for(var i=oLi.lenth-1;i>=0;i--){
//				oUl.appendChild(oLi[i])
//			}
			$(this).css({
				'background':'#fff',
				'height':47,
				
			}).find('i').css('background-position-y',-10)
			$('.l1').not(this).css({
				'background':'transparent',
				'height':46
				
			})
		})
	}
	
	return {
		
		clone:clone,
		click:click
	}
})