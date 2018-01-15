define(function(){
	class Slider{
		constructor(id){
			this.ele = document.getElementById(id)
			this.imgs = this.ele.getElementsByTagName("img")
			this.num = this.imgs.length;
			this.ollis = this.ele.getElementsByTagName("li")
			this.nowIndex = 0;
			this.ltBtn = this.ele.getElementsByClassName('left')[0];
			this.rtBtn = this.ele.getElementsByClassName('right')[0]
			this.init();
			this.event();
			this.timer = null;
			this.autoPlay();
			
		}
		init(){
			for(var i = 0;i<this.num;i++){
				this.imgs[i].style.display = "none";
				this.ollis[i].style.backgroundColor = "#cf0958"
			}
			this.imgs[this.nowIndex].style.display = "block";
			this.ollis[this.nowIndex].style.backgroundColor = "black"
		}
		event(){
			let that = this;
			for(var i = 0 ;i<this.num;i++){
				this.ollis[i].index = i;
				this.ollis[i].onclick = function(){
					that.nowIndex = this.index;
					that.init()
				}
			}
			this.ltBtn.onclick = function(){
				that.nowIndex--;
				if(that.nowIndex<0){
					that.nowIndex = that.num-1
				}
				that.init()
			}
			this.rtBtn.onclick = function(){
				that.nowIndex++;
				if(that.nowIndex>that.num-1){
					that.nowIndex = 0
				}
				that.init()
			}
		}
		autoPlay(){
			this.timer = setInterval(function(){
				this.nowIndex++;
				if(this.nowIndex>this.num-1){
					this.nowIndex = 0
				}
				this.init()
				
			}.bind(this),3000)
			this.ele.onmouseenter=function(){
				clearInterval(this.timer)
			}.bind(this)
			this.ele.onmouseleave = function(){
				this.autoPlay()
			}.bind(this)
		}
	}
	function clone(){
		//抢购克隆
		for(let i = 0;i<49;i++){
			var dl = $('#jiu').clone(true);
			dl.find('img').attr('src','image/index'+(i+1)+'.jpg')
			$('.list-wp').append(dl)
		}		
		var left = $('.list-wp').offset().left
		$('#qianggou .left').click(function(){
			if(left==0){
				left=-10710
			}else{
				left+=1190
			}
			$('.list-wp').animate({
				left:left
			},100)
			return left
		})
		$('#qianggou .right').click(function(){
			if(left==-10710){
				left=0
			}else{
				left-=1190
			}
			
			$('.list-wp').animate({
				left:left
			},100)
			return left
		})
		//喜欢克隆
		for(var i = 51;i<=70;i++){
			var li=$("#like_box li:eq(0)").clone(true);
			li.find('img').attr('src','image/'+i+'.jpg')
			$('#like_box ul').append(li)
		}
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
		
	}
	function clone2(){
		for(let j = 0;j<4;j++){
			var d=$(".hot dl:eq(0)").clone(true);
			d.find('img').attr('src','image/r'+(j+1)+'.jpg')
			$('.hot').append(d)
		}
		for(var i =0;i<4;i++){
			var floor = $('#f1').clone(true);
			floor.attr('id',"f"+(i+2)).find('')
			floor.insertAfter($("#f"+(i+1)))
			$("#f"+(i+2)+' .lunbo div').attr('id','lunbo'+(i+3))
		}
	}
	function link(){
		$('#kefu').click(function(){
			 window.open ('html/kefu.html', 'newwindow', 'height=545, width=720, top=132, left=196, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
		})
		$('.btn').click(function(){
			location.href='html/register.html'
		})
		$('body a').attr('href','html/product.html')
		$('body .login').attr('href','html/login.html')
		$('body .register').attr('href','html/register.html')
		$('body .index').attr('href',"index.html")
		$('.gocart').attr('href','html/cart.html')
		$('#kefu').attr('href','javascript:;')
		$('.gwc').click(function(){
			location.href = 'html/cart.html'
		})
	}
	
	function time(){
		
		setInterval(function(){
			var date = new Date();
			var h = 24-date.getHours(),m=60-date.getMinutes(),s=60-date.getSeconds();
			$('.hour').html(h)
			$('.minute').html(m)
			$('.second').html(s)
		},1000)
	}
	
	return {
		fn :Slider,
		clone:clone,
		clone2:clone2,
		time:time(),
		link:link
	}
	
})