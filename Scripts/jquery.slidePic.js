(function($){
		$.fn.extend({ 
			slidePic : function(options){
				var defaults = {
					time : 3000,
					currentClass:'current'
				},
				on = 0,
			 	len = $(".slideList li").length,
			 	time = options.time,
			 	currentClass = options.currentClass,
			 	options = $.extend(defaults,options);
				for(var i = 0;i < len;i++){
					$(".slidePage").append("<span></span>");
				}
				function add(){
					on ++;
					on = on > len-1?0:on;
				}
				function method(){
					$(".slidePage span").eq(on).addClass("current").siblings().removeClass("current");
					$(".slideList li").eq(on).animate({opacity : 1}).css("z-index","1").siblings().animate({opacity : 0}).css("z-index","0");
				}
				method();
				timer = setInterval(function(){add();method();},time);
				$(".slidePage span").mouseenter(function(){
					on = $(this).index();				
					clearInterval(timer);
					method();
				}).mouseleave(function(){
					timer = setInterval(function(){add();method();},time);
				});
			}
		});
	})(jQuery);