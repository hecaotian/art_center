function animateKing(nodeName){
    $(nodeName).each(function(){
        var thisTop = $(this).css("top").split("px")[0];
        var thisLeft = $(this).css("left").split("px")[0];
        var thisBottom = $(this).css("bottom").split("px")[0];
        var thisRight = $(this).css("right").split("px")[0];
        var data_top = $(this).attr("data-top") ? $(this).attr("data-top").split("px")[0]: 0;
        var data_left = $(this).attr("data-left") ? $(this).attr("data-left").split("px")[0]: 0;
        var data_bottom = $(this).attr("data-bottom") ? $(this).attr("data-bottom").split("px")[0]: 0;
        var data_right = $(this).attr("data-right") ? $(this).attr("data-right").split("px")[0]: 0;
        var data_delay = $(this).attr("data-delay") ? $(this).attr("data-delay").split("px")[0]: 0;
       
       
        var InitTop = thisTop-data_top;
        var InitLeft = thisLeft - data_left;
        var InitBottom = thisBottom - data_bottom;
        var InitRight = thisRight - data_right;
        var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
        $(this).css({"top":InitTop,"left":InitLeft,"bottom":InitBottom,"right":InitRight});
        if(isChrome){
            $(this).css({"opacity":"0"});
        }
        //$(this).delay(data_delay).animate({top:thisTop,left:thisLeft,bottom:thisBottom,right:thisRight,opacity:1},1000);
        $(this).delay(data_delay).animate({top:thisTop,left:thisLeft,opacity:1},1000);
    })	        
    	        
} 