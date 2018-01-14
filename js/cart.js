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
				var str =` <tr>
						<td width="60">
							<input type="checkbox" />
						</td>
						<td colspan="2" width="560">
							<img src="../image/s1.jpg" alt="" />
							<p>
							<font></font>
							<b>${goodid.name}</b>
							</p>
							<em>颜色：共同<br />款式：共同</em>
							
						</td>
						<td width="125">
							${goodid.price}
						</td>
						<td width="150">${goodid.num}</td>
						<td width="105">${goodid.price*goodid.num}</td>
						<td width="103">
							<a href="javascript:;">删除</a>
						</td>
					</tr>`;
					$('tbody').append(str)
				
			}
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
		add:add
	}
	
})