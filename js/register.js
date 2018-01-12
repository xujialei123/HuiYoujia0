define(function(){
	function register(){
		$('.sp2').click(function(){
			$('.sp2').css({
				'color':'#e30f50',
				'border-bottom':'1px solid #dc0f50'
			})
			$('.form2').css('display','block')
			$('.form1').css('display','none')
			$('.sp1').css({
				'color':'#666',
				'boder-bottom':0
			})
		})
		$('.sp1').click(function(){
			$('.sp1').css({
				'color':'#e30f50',
				'border-bottom':'1px solid #dc0f50'
			})
			$('.form2').css('display','none')
			$('.form1').css('display','block')
			$('.sp2').css({
				'color':'#666',
				'boder-bottom':'none'
			})
		})
		var user = $("#txt").val();
		var pwd = $('#ps').val();
		var reg = /^((156)|(158)|(188)|(135)|(177)|(133))[0-9]{8}$/;
		
			$('.dl').click(function(){
			if(reg.test($("#txt").val())){
				$('#ts').css('display','none')
			var users = $.cookie('loginUser') ? $.cookie('loginUser') :"";
			users = strtoobj(users);
			if(users[$("#txt").val()]==$('#ps').val()){
				var userStr = JSON.stringify(users)
				$.cookie('loginUser',userStr,{expires:7,path:'/'})
				location.href = '../index.html'
			}else{
				alert('账号或密码不存在')
			}
		}else{
			$('#ts').css('display','block')
		}
		})
		
		function strtoobj(str){
			if(!str){
					return {};
				}
			return JSON.parse(str)
		}
	}
	return {
		register:register
	}
})