define(function(){
	function blur(){
		var pm = null ;
		var pw = null;
		var qpw = null;
		var yzm = null;
		var yz = null;
		var flag = true;
		var abmit = null;
		var random = parseInt(Math.random()*10000)
		var rancolor ="#"+Math.ceil(Math.random()*0xffffff).toString(16)
		var color = "#"+Math.ceil(Math.random()*0xffffff).toString(16)
		var randomnum = parseInt(Math.random()*1000000)
		$('.random').html(random).css({'background-color':rancolor,'color':color})
		
		$('#mobile').blur(function(){
			
		var reg = /^((156)|(158)|(188)|(135)|(177)|(133)|(155))[0-9]{8}$/;
		if(reg.test($('#mobile').val())){
			$('#mobile').siblings('span').html("");
			pm=true
		}else{
			delete $('#mobile').val()
			$('#mobile').siblings('span').html("请输入11位有效手机号");
			pm=false
		}
	})
		$(".random").click(function(){
			$('.random').html(parseInt(Math.random()*10000))
			$('.random').css('background',"#"+Math.ceil(Math.random()*0xffffff).toString(16))
		})
		$('.random').siblings('input').blur(function(){
			if($(this).val()!=$('.random').html()){
				$('.random').next('span').html('图形验证码不正确请重新输入');
				yzm = false
			}else{
				$('.random').next('span').html('');
				yzm = true
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
		$('.got').click(function(){
			$('.got').siblings('i').html(randomnum).css('background',"#"+Math.ceil(Math.random()*0xffffff).toString(16))
			
		})
//		if($('#abmit').attr('checked','checked')){
//			abmit=true
//		}else{
//			abmit = false
//		}
//		$('#abmit').click(function(){
//			$("#abmit").attr('checked','checked')
//			abmit =true
//			$(this).click(function(){
//				$("#abmit").attr('checked')
//				abmit = false
//			})
//		})
		$("#abmit").click(function(){
			if(flag){
				abmit =true
			}else{
				abmit = false
			}
			flag = !flag
		})
		$('.zc').click(function(){
			if($('#yanzheng').val()==randomnum&&$('#yanzheng').val()!=''){
				yz=true
			}else{
				yz=false
				alert('验证码错误')
			}		
			var username = $('#mobile').val();
			var pwd = $('#pwd').val();
			if(!(pw&&pm&&qpw&&yzm&&yz&&abmit)){
				if(pw&qpw){
					$('#mobile').siblings('span').html("请输入11位有效手机号");
				}else if(pm){
					$('#pwd').siblings('span').html("请输入密码")
				}if(!abmit){
					alert('请同意协议')
					return 
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