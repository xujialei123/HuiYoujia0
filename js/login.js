define(function(){
	function blur(){
		var pm = null ;
		var pw = null;
		var qpw = null;
		$('#mobile').blur(function(){
			
		var reg = /^((156)|(158)|(188)|(135)|(177)|(133))[0-9]{8}$/;
		if(reg.test($('#mobile').val())){
			$('#mobile').siblings('span').html("");
			pm=true
		}else{
			delete $('#mobile').val()
			$('#mobile').siblings('span').html("请输入11位有效手机号");
			pm=false
		}
	})
		$("#pwd").blur(function(){
			var reg = /^[\S]{6,16}$/;
			if(reg.test($("#pwd").val())){
				pw = true
				$("#pwd").siblings('span').html("");
			
			}else if($("#pwd").val("")){
				pw=false
				$('#pwd').siblings('span').html("请输入密码")
				
			}else{
				pw=false
				$('#pwd').val("")
				$('#pwd').siblings('span').html("请输入6-16位字符且不能包括空格")
				
			}
		})
		$("#qpwd").blur(function(){
			
			if($("#qpwd").val()!=$("#pwd").val()){
				$("#qpwd").siblings('span').html('两次输入的密码不一致')
				qpw=false
				
			}else if(!$("#qpwd").val()){
				$("#qpwd").siblings('span').html('请输入确认密码')
				qpw=false
			}else{qpw=true}
		})
		$('.zc').click(function(){
			var username = $('#mobile').val();
			var pwd = $('#pwd').val();
			if(!(pw&&pm&&qpw)){
				if(pw&qpw){
					$('#mobile').siblings('span').html("请输入11位有效手机号");
				}else if(pm){
					$('#pwd').siblings('span').html("请输入密码")
				}
				return
			}
			
			var users = $.cookie('loginUser') ? $.cookie('loginUser') :"";
			users = strtoobj(users);
			if(username in users){
				alert('用户已存在请重新注册')
				return;
			}else{
				users[username] = pwd;
				var userStr = JSON.stringify(users);
				$.cookie('loginUser',userStr,{expires:7,path:"/"});
				alert('注册成功')
				location.href = '../index.html'
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
		blur:blur
	}
})