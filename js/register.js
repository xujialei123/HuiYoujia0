define(function(){
	function register(){
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