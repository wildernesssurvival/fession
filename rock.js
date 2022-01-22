function $(id){
		return document.getElementById(id);
		/*此函数用来依据id获取元素，id为函数参数*/
	}
	
	var Lt=$("left");
	var Rt=$("right");
	var index=0;/*代表当前播放的图片是第几张*/
	var timer=null;
	var pic=$("pic").getElementsByTagName("li");/*获取id=pic的元素内标签名为li的元素，有多个，返回值是一个列表*/
	var num=$("num").getElementsByTagName("li");
	var Div=$("wrap");
	timer=setInterval(run,2000);/*定时播放图像*/
	
	/*当鼠标点击右箭头时，执行函数，
	当index的值超出范围是，归0，
	没有超出范围时，播放下一张图像*/
	Rt.onclick=function(){
		index++;
		if(index>=pic.length)
			{
				index=0;
			}
		change(index);
		
	}
	/*当鼠标点击左箭头时，执行函数，
	当index的值超出范围是，将其值设置为最大值，
	即代表最后一张图像，
	没有超出范围时，播放上一张图像*/
	Lt.onclick=function(){
		index--;
		if(index<0)
			{
				index=pic.length-1;;
			}
		change(index);
		
	}
	/*当鼠标悬停在此元素上方时，执行函数，停止定时播放*/
	Div.onmouseover=function(){
		clearInterval(timer);
		/*clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作
		clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值。
注意: 要使用 clearInterval() 方法, 在创建执行定时操作时要使用全局变量：*/
	}
	/*当鼠标离开此元素上方时，执行函数,继续定时播放*/
	Div.onmouseout=function(){
		timer=setInterval(run,2000)
		/*setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。*/
	}
	
	/*播放下一张图像*/
	function run(){
		index++;
		if(index>=pic.length){
			index=0;
		}
		change(index);
	}
	for(var i=0;i<num.length;i++){
		num[i].index=i;
		/*给每一项一个序号，当鼠标悬停在此项元素上方时，播放与它序号相同的那张图像*/
		num[i].onmouseover=function(){
			change(this.index);
		}
	}
	/*播放序号为curindex的图像*/
	function change(curindex){
		for(var i=0;i<pic.length;i++){
			pic[i].style.display="none";
			num[i].className="";
		}
		/*使序号为curindex的图像显示出来，其它图像不显示，
		为相同序号的小圆点的className属性赋值，其它序号不同的项清除这一属性，
		使这一序号的小圆点的背景与其它不同*/
		pic[curindex].style.display="block";
		num[curindex].className="active";
		index=curindex;/*使index的值为当前正在播放的图像的序号*/
	}