$(function(){
    var timer1=null;
    var bannerArr=$(".img_box ul li");
    var autoN=0;

    //导航条拉伸
    $(".nav_1 > li").on("mousemove",function(){
        $(this).find("ul").css("height",$(this).find("ul").find("li").length*30+"px")
    })
    $(".nav_1 > li").on("mouseout",function(){
        $(this).find("ul").css("height",0+"px")
    })
    //动态添加banner导航
    for(var i=0;i<bannerArr.length;i++){
        $(bannerArr[i]).css("width",$("body")[0].offsetWidth+"px")
        var newbtn=document.createElement("li");
        $(".number_box ul")[0].appendChild(newbtn);
    }
    //设置banner整条宽度
    var numberArr=$(".number_box ul li")
    $(".img_box ul").css("width",bannerArr.length*bannerArr[0].offsetWidth+"px")
    console.log(bannerArr[0].offsetWidth)

    //banner滑动函数
    function bannerMove(n){
        $(".img_box ul").css("left",-n*bannerArr[0].offsetWidth+"px")
        for(var i=0;i<numberArr.length;i++){
            $(numberArr[i]).css("width","12px")
            $(numberArr[i]).css("height","12px")
            $(numberArr[i]).css("background-color","rgba(0,0,0,.3)")
        }

        $(numberArr[n]).css("width","14px")
        $(numberArr[n]).css("height","14px")
        $(numberArr[n]).css("background-color","#fff")
    }
    bannerMove(0);

    //添加banner导航点击事件
    for(var k=0;k<numberArr.length;k++){
        numberArr[k].indexs=k;
        $(numberArr[k]).on("click",function(){
            clearInterval(timer1)
            autoN=$(this)[0].indexs;
            bannerMove(autoN);
            console.log($(this)[0].indexs)
            timer1=setInterval(function(){
                console.log(numberArr.length)
                autoN+=1;
                if(autoN>bannerArr.length-1){
                    autoN=0;
                }
                bannerMove(autoN);
            },3000)
        })
    }
    //banner自动滑动
    clearInterval(timer1)
    timer1=setInterval(function(){
        autoN+=1;
        if(autoN>bannerArr.length-1){
            autoN=0;
        }
        bannerMove(autoN);
    },3000)

    $(".title_1 p").on("click",function(){
        $(".top_left").removeClass("show_title_2")
    })
    $(".title_2 p").on("click",function(){
        $(".top_left").addClass("show_title_2")
    })
})
