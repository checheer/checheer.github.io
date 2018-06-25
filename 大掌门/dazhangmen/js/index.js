
	/*_______________________________________________________________________________________________________________________________________________________*/
	$(function(){
	var top_bar=$(".top_bar"),
		left_nav=$(".left_nav"),
		search_btn=$(".top_bar .search img"),
		shop_btn=$(".top_bar .shop"),
		top_menu=$(".top_bar .menu"),
		left_menu=$(".left_nav .menu"),
		left_three_line=$(".left_nav .three_line"),	
		before_page=$(".before_page"),
		top_bar_before=$(".top_bar_before"),
		timer1=null,
		timer2=null;
		var canMove=false,
			can_top_move=false;
	
	shop_btn.on("click",function(){
		window.location.href = "product.html";
	})
	
	
	if($("body")[0].offsetWidth<=1000){
		function showLeft(){
			canMove=true;
			top_bar.animate({'top':-top_bar[0].offsetHeight+'px'},300,function(){
					left_nav.animate({'left':'0px'},300,function(){
							canMove=false;
					})
			});
		}
		function showTop(){
			canMove=true;
			left_nav.animate({'left':-left_nav[0].offsetWidth+'px'},300,function(){
					top_bar.animate({'top':"0px"},300,function(){
						canMove=false;
					});
			})
		}
		
			before_page.on("click",function(event){
				event.stopPropagation();
				if(canMove){
					return
				}else{
					showTop();
				}
			})
			top_menu.on("click",function(event){
				event.stopPropagation();
				if(canMove){
					return
				}else{
					showLeft();
				}
			})
			left_menu.on("click",function(event){
				event.stopPropagation();
				if(canMove){
					return
				}else{
					showTop();
				}
			})
			left_three_line.on("click",function(event){
				event.stopPropagation();
				showTop();
			})
			left_nav.on("mouseleave",function(){
				timer1=setTimeout(function(){
					if(canMove){
						return
					}else{
						showTop();
					}
				},500)
			})
			
			left_nav.on("mouseover",function(){
				clearTimeout(timer1);
			})
	}
	else if($("body")[0].offsetWidth>=1000){
		function showTop(){
		can_top_move=true;
		$(".before_page h1").css("padding-top","230px");
		$(".before_page .logo").css("margin-top","150px");
		top_bar.animate({'opacity':'1'},300,function(){
				can_top_move=false;
		})
	}
	function hideTop(){
		can_top_move=true;
		$(".before_page h1").css("padding-top","300px");
		$(".before_page .logo").css("margin-top","40px");
		top_bar.animate({'opacity':'0'},300,function(){
				can_top_move=false;
		})
	}
	function showLeft(){
		left_nav.animate({'left':0+'px'},300,function(){
			
		})
	}
	function hideLeft(){
		left_nav.animate({'left':-left_nav[0].offsetWidth+'px'},300,function(){
			
		})
	}	
		hideTop();
		top_bar_before.on("mouseover",function(){
			if(can_top_move){
				return;
			}else{
				showTop();
			}
		})
		top_bar_before.on("mouseleave",function(){
				hideTop();
		})
		before_page.on("click",function(event){
			event.stopPropagation();
			if(canMove){
				return
			}else{
				hideLeft();
			}
		})
		top_menu.on("click",function(event){
			event.stopPropagation();
			if(canMove){
				return
			}else{
				showLeft();
				hideTop();
			}
		})
		left_menu.on("click",function(event){
			event.stopPropagation();
			if(canMove){
				return
			}else{
				hideLeft();
			}
		})
		left_three_line.on("click",function(event){
			event.stopPropagation();
			hideLeft();
		})
		left_nav.on("mouseleave",function(){
			timer1=setTimeout(function(){
				if(canMove){
					return
				}else{
					hideLeft();
				}
			},500)
		})
		
		left_nav.on("mouseover",function(){
			clearTimeout(timer1);
		})
		
		var left_page=$(".left_page"),
			pageWidth=$("body")[0].offsetWidth,
		    pageTimer=null,
			right_page=$(".right_page");
			
			function show_left_page(){
				left_page.addClass("page_show");
				before_page.find(".logo").css("margin-left",-pageWidth/2+"px")
				before_page.find(".bt_text").css("left",-pageWidth/4+"px")
			}
			function hide_left_page(){
				left_page.removeClass("page_show");
				before_page.find(".logo").css("margin-left",0+"px")
				before_page.find(".bt_text").css("left",0+"px")
			}
			function show_right_page(){
				right_page.addClass("page_show");
				before_page.find(".logo").css("margin-left",pageWidth/2+"px")
				before_page.find(".bt_text").css("left",pageWidth/4+"px")
			}
			function hide_right_page(){
				right_page.removeClass("page_show");
				before_page.find(".logo").css("margin-left",0+"px")
				before_page.find(".bt_text").css("left",0+"px")
			}
			function show_middle(){
				left_page.animate({'opacity':'0'},300);
				right_page.animate({'opacity':'0'},300,function(){
					before_page.find("h1").animate({'opacity':'1'},300);
					before_page.find("h2").animate({'opacity':'1'},300);
					before_page.find(".logo").css("margin-left",0+"px")
					before_page.find(".bt_text").css("left",0+"px")
				});
			}
			function hide_middle(fn){
				before_page.find("h1").animate({'opacity':'0'},300);
				before_page.find("h2").animate({'opacity':'0'},300,function(){
					left_page.animate({'opacity':'1'},300);
					right_page.animate({'opacity':'1'},300);
				});
			}
			
			left_page.on("mouseover",function(){
				hide_middle();
				show_left_page();
			})
			left_page.on("mouseleave",function(){
				hide_left_page()
			})
			right_page.on("mouseover",function(){
				hide_middle();
				show_right_page()
			})
			right_page.on("mouseleave",function(){
				hide_right_page()
			})
			setTimeout(function(){
				hide_middle();
			},5000)
	}
	
	/*_______________________________________________________________________________________________________________________________________________________*/

	search_btn.on("click",function(){
		console.log($(".top_bar .search input")[0].value)
		if($(".top_bar .search input")[0].value!=""){
			return;
		}else{
			$(".search").toggleClass("re_search");
			$(".top_bar .search input")[0].focus();
		}
	})
	$(".top_bar .search input").blur(function(){
		if($(".top_bar .search input")[0].value!=""){
			return;
		}else{
			console.log("a")
			$(".search").toggleClass("re_search");
		}
	})

	/*_______________________________________________________________________________________________________________________________________________________*/
	
	window.onresize = function(){
		bgiReSize();
		imgWidth=$(".background_img").find("li")[0].offsetWidth;
	}
	bgiReSize();
	function bgiReSize(){
		$(".background_img").find("li").each(function(index,obj){
			obj.style.width=$("html")[0].clientWidth+"px";
		})
		var bgiWidth=($(".background_img").find("li")[0].offsetWidth)*($(".background_img").find("li").length+1);
		$(".background_img").css("width",bgiWidth+"px");
	}
	
	/*_______________________________________________________________________________________________________________________________________________________*/
//	var bgiMoveIndex=0;
//	setInterval(function(){
//		bgiMoveIndex+=1
//		if(bgiMoveIndex>2){
//			bgiMoveIndex=0;
//		}
//		$(".background_img").css("left",-bgiMoveIndex*($(".background_img").find("li")[0].offsetWidth)+"px")
//	},3000)
	var imgWidth=$(".background_img").find("li")[0].offsetWidth;
	var imgArr=$(".background_img");
	var moveTimg=null;
	clearInterval(moveTimg);
	moveTimg=setInterval(function(){
		$(".background_img").animate({'left':-imgWidth+"px"},1000,function(){
			imgArr.find("li").eq(0).appendTo(imgArr);
			console.log(imgArr);
			$(".background_img").css("left",0+"px")
		})
	},3000)
	
	
	
	
	
})
	
	
	