$(function(){
	var top_bar=$(".top_bar"),
		left_nav=$(".left_nav"),
		search_btn=$(".top_bar .search img"),
		shop_btn=$(".top_bar .shop"),
		top_menu=$(".top_bar .menu"),
		left_menu=$(".left_nav .menu"),
		left_three_line=$(".left_nav .three_line"),	
		before_page=$(".before_page"),
		page_name_return=$(".page_name_return"),
		timer1=null,
		timer2=null;
		var canMove=false;
	
	shop_btn.on("click",function(){
		window.location.href = "product.html";
	})
	
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
    page_name_return.on("click",function(){
    	console.log(1)
          window.history.back();
    })
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

	/*_______________________________________product________________________________________________________________________________________________________________*/
	var collects=$(".product_main").find(".collect");
	collects.each(function(index,obj){
		console.log($(obj))
		this.IsCollect="collected";
		$(obj).on("click",function(){
			event.stopPropagation();
			console.log(this.IsCollect)
			$(this).attr("src","img/"+this.IsCollect+".png");
			if(this.IsCollect=="uncollect"){
				this.IsCollect="collected";
			}else{
				this.IsCollect="uncollect";
			}
		})
	})
	/*_______________________________________new_topic________________________________________________________________________________________________________________*/
			$("#item1").on("click",function(){
				$(".new_topic_main").addClass("show_item1")
				$(".new_topic_main").removeClass("show_item2")
				if($(".new_topic_main").hasClass("show_item2")){
				}else{
				}
			})
			$("#item2").on("click",function(){
				$(".new_topic_main").addClass("show_item2")
				$(".new_topic_main").removeClass("show_item1")
				if($(".new_topic_main").hasClass("show_item2")){
				}else{
				}
			})
	
})