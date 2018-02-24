(function(){
    function resizeChange(){
        var Cwrap = $(".cwrap"),
            //Wrapcon = $(".wrapcont_message"),
            Cwrap_list = $(".cwrap_list"),
            new_cwrap_list = $(".new_cwrap_list");
            //wrap_cont = $(".wrap_content"),
            Imgbox = $(".img_box"),
            imgBox = $(".img_box img"),
            Cont = $(".contact_cont"),
            ContactMeg = $(".contact_message,.traffic_message"),
            winWidth = $(window).width(),
            winHeight = $(window).height();
        Cwrap.css({"width":winWidth,"height":winHeight-160});
        //Wrapcon.css({"height":winHeight-200});
        Cwrap_list.css({"width":winWidth,"height":winHeight-160});
        new_cwrap_list.css({"width":winWidth,"height":winHeight-160});
        Imgbox.css({"width":winWidth,"height":winHeight-160});
        imgBox.css({"width":winWidth,"height":winHeight-160});
        Cont.css({"height":winHeight-160,"margin-top":0,"top":0});
        ContactMeg.css({"height":winHeight-160});
    //    wrap_cont.css({"height":winHeight-180});
        ratio = parseInt($(".cwrap").width())/parseInt($(".cwrap").height());
   
    
        if(ratio > 1.940340909){
           $(".img_box img").css({width:$(".cwrap").width(),height:$(".cwrap").height()});
           $(".index_banner img").css({width:$(".cwrap").width(),height:"auto"});
           //setTimeout(function(){$(".Image_block img").css({marginTop:-($(".Image_block img").height()-$(".bodyer").height())/2})},50);
        }else{
           $(".img_box img").css({height:$(".cwrap").height(),width:"auto"});
           $(".index_banner img").css({height:$(".cwrap").height(),width:"auto"});
           //setTimeout(function(){$(".Image_block img").css({marginLeft:-($(".Image_block img").width()-$(".bodyer").width())/2})},50);
        }
    }
    $(function(){
       resizeChange(); 
    });
    $(window).bind("resize",function(){
        
        resizeChange();
        
    });



    $(function(){
        
        //页面滚动
        
        var on = $UrlParameter("nid")?$UrlParameter("nid"):0,
            flag = true,
            $height = $(".cwrap_list").height(),
            len = $(".cwrap_list").length;
            
//        if(!$UrlParameter("nid") || $UrlParameter("nid") == "0"){
//            $(".downarr").show();
//        }else{
//            $(".downarr").remove();
//        }
        
        function add(){
            on ++;
            on = on > len-1?len-1:on;
        }
        function min(){
            on --;
            on = on < 0?0:on;
        }
        function method(){
            change();
            move(on);
            $(".cwrap_wrap").stop().animate({marginTop : -on*$height});
//            if(on!=0){
//                $(".downarr").fadeOut().remove();
//            }
        }
        method();
        
        //鼠标滚轮事件
        
       $(".cwrap").mousewheel(function(event,delta){
           if(flag){
               flag = false;
               if(delta < 0){
                   add();
                   method();
               }
               if(delta > 0){
                   min();
                   method();
               }
               setTimeout(function(){flag = true},200);
           }
       }); 
       
       //判断on的临界值，切换按钮
       
       function change(){
           if(on == 0){
               $(".atop").css("display","block");
               $(".abtt").css("display","none");
           }else if(on == len-1){
               $(".abtt").css("display","block");
               $(".atop").css("display","none");
           }
       }
       
       //调用计时器，让按钮循环跳动
       
       timer = setInterval(jumpFun,800);
        function jumpFun(){
            $(".arrow_btn span").stop().animate({bottom : 15},200,function(){
                $(this).stop().animate({bottom : 5},200);
            });
        }
        
        //鼠标移上按钮是，清除计时器，移出是重新调用计时器
        
        $(".arrow_btn span").mouseenter(function(){
            clearInterval(timer);
            $(this).css("bottom","10px");
        }).mouseleave(function(){
            timer = setInterval(jumpFun,600);
        });
        
        //绑定按钮点击事件，控制页面滚动
        
        $(".arrow_btn .abtt").click(function(){
            min();
            method();
        });
        $(".arrow_btn .atop").click(function(){
            add();
            method();
        });
        
        //侧面控制按钮
        
        function move(n){
            $(".cbtn li").eq(n).addClass("liCurrent").siblings().removeClass("liCurrent");
        }
        $(".cbtn li").click(function(){
           on = $(this).index();
           move(on);
           method();
        }).eq(on).trigger("click");
        
        function getHeight(){
            var liHeight = $(".cbtn li").height() + 10,
                len = $(".cbtn li").length,
                Cbtn = $(".cbtn");
            //Cbtn.css("margin-top",-(len*liHeight)/2);
        }
        getHeight()
    });
})();

