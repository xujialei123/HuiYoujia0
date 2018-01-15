define(function(){
	function add(){
		var cartstr = $.cookie('cart') ? $.cookie('cart') : "";
		if(!cartstr){
			$('.kong').css('display','block');
			$('.you').css('display','none')
		}else{
			$('.kong').css('display','none');
			$('.you').css('display','block')
			var cartobj = strtoobj(cartstr);
			for(var id in cartobj){
				var goodid=cartobj[id];
				var str =` <tr class="list" good-data-id=${id}>
						<td width="60">
							<input type="checkbox" class="sel"/>
						</td>
						<td colspan="2" width="560">
							<img src="${goodid.src}" alt="" />
							<p>
							<font></font>
							<b>${goodid.name}</b>
							</p>
							<em>颜色：共同<br />款式：共同</em>
							
						</td>
						<td width="125">
							${goodid.price}
						</td>
						<td width="150" class="hejishuliang">${goodid.num}</td>
						<td width="105" class='xiaoji'>${goodid.price*goodid.num}</td>
						<td width="103">
							<a href="javascript:;" class="delete">删除</a>
						</td>
					</tr>`;
					$('tbody').append(str);					
			}
			$('.delete').click(function(){
//					var goodid = $(this).parents('.list').attr('good-data-id');
//					delete cartobj[goodid];
//					$.cookie('cart',JSON.stringify(cartobj),{expires:7,path:'/'});
					$.removeCookie('cart',{expires:7,path:'/'})
					$('.kong').css('display','block');
					$('.you').css('display','none')
					})
			$('.delbtn').click(function(){
				var str=`<div class="cont">
					<h2><span class="close">关闭</span></h2>
					<div id="message">
						<p>
							<span></span>
							确定从购物车删除所有商品？
						</p>
						<b>
							<i class="close">取消</i>
							<i class="delete">确认</i>
						</b>
					</div>
				</div>`;
				$('body').append(str);
				$('.close').click(function(){
					$('.cont').css('display','none')
				})
				$('.delete').click(function(){
					$.removeCookie('cart',{expires:7,path:'/'})
					$('.cont').css('display','none')
					location.reload()
				})
			})
		var flag = false;
		$('.sel').click(function(){
			if(!flag){
			$('.shuliang').html($('.hejishuliang').html());
			$('.paymoney em').html('￥'+$('.xiaoji').html())
		}else{
			$('.shuliang').html(0);
			$('.paymoney em').html('￥0.00')
		}
		flag=!flag
		})
		
	}}
	function strtoobj(str){
		if(!str){
			return {}
		}else{
			return JSON.parse(str)
		}
	}
	return {
		add:add
	}
	
})