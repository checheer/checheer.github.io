
//index选项卡
function index(){

var mul = document.getElementsByClassName('menu')[0];
var menuli = mul.getElementsByTagName('li');
var cul = document.getElementsByClassName('content1')[0];
var conentli = cul.getElementsByTagName('li');

var informationul = document.getElementsByClassName('informationMenu')[0];
var informationli = informationul.getElementsByTagName('li');
var menuContentul = document.getElementsByClassName('menuContent')[0];
var menuContentli = menuContentul.getElementsByTagName('li');


//轮播
var bannerboxlf = document.getElementsByClassName('banner-left')[0];
	var bannerbox= document.getElementsByClassName('bannerbox')[0];
		var ulObj= bannerbox.getElementsByTagName('ul')[0];
		var liObj= ulObj.children;
		var Width= bannerbox.offsetWidth;
		var iocnbox= document.getElementsByClassName("iconbox")[0]
		var len=liObj.length;
		var iconObj=null;
		var isanimat = false;



//选项卡
tab(menuli,conentli);
tab(informationli,menuContentli);



//无缝轮播
var contentbox=document.getElementsByClassName('content')[0];
var bannerboxObj=document.getElementsByClassName('ulli')[0];
	var Objul=bannerboxObj.children[0];
	var move = setInterval(fn_move,30);
	var num=0;
	Objul.innerHTML+=Objul.innerHTML;
	console.log(bannerboxObj)
	function fn_move () {
		num==-900?num=0:num-=2;
		Objul.style.marginLeft=num+"px";
	}

	contentbox.onmouseover = function() {  // 鼠标经过大盒子  停止定时器
        clearInterval(move);
    }
    contentbox.onmouseout = function() {
        move = setInterval(fn_move,30);  // 开启定时器
    }




//右侧导航栏
	
	var ulnav = document.getElementsByClassName('ulnav')[0];
	var linav = ulnav.children;
	var anav = linav.children;
	var lilen = linav.length;
	for (var a = 0; a < lilen; a++) {
		linav[a].onmouseover = function(){
			linav[0].firstChild.className = '';
			this.firstChild.className = 'active';
		}
		linav[a].onmouseout = function(){
			this.firstChild.className = '';
		}
	}


		//轮播
		ulObj.style.width=len*Width+"px";
		//li绑定索引
		for (var i = 0; i < liObj.length; i++) {
			liObj[i].index=i;
		};
		//创建dot
		greatDot();
		//设置指针 记录当前播放页
		var flg=0;
		//小圆点击
		dotClick();
		// 左滑
		// lfObj.onclick=function(){
		// 	movelf();
		// }
		// 右滑
		// rtObj.onclick=function(){
		// 	movert();
		// }
		movelf()
		//设置计时器 循环播放
		var temp= setInterval(movelf,2000);
		//鼠标悬浮停止滑动
		bannerboxlf.onmouseover=function(){
			console.log()
			clearInterval(temp);
		}
		//鼠标离开开始滑动
		bannerboxlf.onmouseout=function(){
			temp= setInterval(movelf,2000);
		}




		//左滑方法
		function movelf(){
			if(isanimat){
				return;
			}
			isanimat=true;
			ulObj.classList.add("animate");
			ulObj.style.marginLeft=-Width+"px";
			setTimeout(function(){
				ulObj.classList.remove("animate");
				ulObj.appendChild(liObj[0]);
				ulObj.style.marginLeft=0;
				flg++;
				if (flg>=len) {
					flg=0;
				};
				movedot(flg);
				isanimat=false;
			},1000)
		}
		function movert(){
			if(isanimat){
				return;
			}
			isanimat=true;
			ulObj.classList.remove("animate");
			ulObj.insertBefore(liObj[len-1],liObj[0]);
			ulObj.style.marginLeft=-Width+"px";
			setTimeout(function(){
				 ulObj.classList.add("animate");
			 ulObj.style.marginLeft=0;

			},100)
			flg--;
				if (flg<0) {
					flg=len-1;
				};
				setTimeout(function(){
						 isanimat=false;
						},1000)
				movedot(flg);
		}
		//创建 小圆点
		function greatDot(){
			for (var i = 0; i < len; i++) {
				// iocnbox.innerHTML+="<span></span>";
				var span =document.createElement("span");
				iocnbox.appendChild(span);
			};
			iocnbox.firstElementChild.classList.add("foc");
			iconObj=iocnbox.children;
		}
		//小圆点点击
		function dotClick (){
			//遍历小圆点
			for (var i = 0; i < iconObj.length; i++) {
			//小圆点添加索引
			iconObj[i].index=i;
			//点击事件			
			iconObj[i].onmouseover=function(){
				//记录点击页面前面还有多少张图片
				var j=0;
				//记录小圆点索引，改变全局当前图片索引
				flg=this.index;
				// 查询J的个数（目标图片前方图片数量）
				for (var a = 0; a <len; a++) {
					if(liObj[a].index!=flg){
						j++;
					}else{
						//跳出
						break;	
					}
				}//将前面的图片依次调到后面（不改变原有顺序）
				for (var k = 0; k < j; k++) {
					ulObj.appendChild(liObj[0])
				};
				//更改小圆点状态
				movedot(flg);
				}
			};
		}
			//更新小圆点
		function movedot(flg){
			for (var j = 0; j < iconObj.length; j++) {
					iconObj[j].classList.remove("foc");
			};
				iconObj[flg].classList.add("foc");
		}


//登陆

var  usename = document.getElementsByClassName('usename')[0];
var  pwd = document.getElementsByClassName('pwd')[0];
var vule = usename.value;
var vule1 = pwd.value;


var  pusername = document.getElementsByClassName('pusername');
var  ppwd = document.getElementsByClassName('ppwd');


usernamefrom(usename,vule);
usernamefrom(pwd,vule1);
function usernamefrom(obj,vu){
	obj.onfocus = function(){
		if (obj.value == vu) {
			this.value ="";
			this.className = "active";
		}
	}
	obj.onblur = function(){
		if (obj.value == "") {
			this.value =vu;
			this.className = "text";
		}
	}
}
}



function synopsis() {
	  	var synopsisul = document.getElementsByClassName('synopsisul')[0];	
	  	var synopsisli = synopsisul.children;
	  	var substanceul = document.getElementsByClassName('substanceul')[0];
	  	var substanceli = substanceul.children;
		tabok(synopsisli,substanceli);

}

function newa(){

	  	var newtitleul = document.getElementsByClassName('newtitle')[0];	
	  	var newtitleli = newtitleul.children;
	  	var newcontent = document.getElementsByClassName('newcontent')[0];
	  	var newcontentli = newcontent.children;
		tabok(newtitleli,newcontentli);




	

}

//选项卡功能移入事件
function  tab(obj,content){

	for (i=0;i<obj.length;i++) {
		obj[i].index = i;
		obj[i].onmouseover = function () {
			for (j=0;j<obj.length;j++) {
				obj[j].classList.remove('active');
				content[j].classList.remove('show');
				
			}	
			this.classList.add('active');
			content[this.index].classList.add('show');
		}	
	}
}

//选项卡功能单击事件
function  tabok(obj,content){

	for (i=0;i<obj.length;i++) {
		obj[i].index = i;
		obj[i].onclick = function () {
			for (j=0;j<obj.length;j++) {
				obj[j].classList.remove('active');
				content[j].classList.remove('show');
				
			}	
			this.classList.add('active');
			content[this.index].classList.add('show');
		}	
	}
}




function  pull_down(){
	var menu = document.getElementsByClassName('menu')[0];
	h3 = menu.getElementsByTagName('h3');
	
	
	tab(h3);
	function tab(obj){
		var  len = obj.length;
		for(i = 0 ; i < len ; i ++ ){
			obj[i].index = i;
			obj[i].onclick = function (){
				for(j = 0; j < len ;j++){
					obj[j].classList.remove('active');
				}
			 this.classList.add('active');
			}
		}
	}
	
}

function theCommonStyle(){
	var nav = document.getElementsByClassName('navul')[0];
	var navli = nav.children;
	var len=  navli.length;
	
	function navo(obj){
		for(i = 0 ; i < len ; i ++ ){
			obj[i].index = i;
			obj[i].onclick = function (){
				for(j = 0; j < len ; j ++){
					obj[j].classList.remove('active');
				}
			this.classList.add('active');
			}
		}
	}
	
	
	navo(navli);
}
