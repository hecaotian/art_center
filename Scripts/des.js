$(window).on("load",function(){	
	getData();
	$(window).on("scroll",function(){
		getData();
	});
})
//function getData(data){
////$.ajax({
//		type:"get",
//		url:"data/designing.php",
//		success:function(data){
//			var num=10;
//			if()
//		},
//		error:function(){
//			alert("网络故障");
//		}
////})
//}
function getData(){
		$.get("data/designing.php").then(data=>{		
        var html="";
        var warps = $("#design_main");	
		for(img of data){
			html+=`<div class="box">
				<div class="pic">
					<img src="${img.pic}"/>
				</div>
			</div>`;
		}
        warps.html(html);
		waterfall();
	})
}
//}
//瀑布流样式
function waterfall(){
    var $boxs = $("#design_main>div");	
    //.width()只获取定义的宽度，不包括margin和padding，因此使用outerwidth()可获取padding在内的宽度
    var w = $boxs.eq(0).outerWidth();	
    //获取列数,,$(window).width()获取整个窗口的宽度，/w除以单个盒子的宽，得到列数
    var cols =Math.floor($(window).width()/w);
    //css()不写参数时是获取样子，加入参数可设置css属性
    $("#design_main").width(w*cols).css("margin","0 auto");
    var hArr=[];
    //$.each()遍历元素，index遍历元素的索引，value为所有class=box的元素
    $boxs.each(function(index,value){
        var h = $boxs.eq(index).outerHeight();
        if(index<cols){
        //把前六张的高放到hArr数组内
            hArr[index] = h; //也可以使用hArr.push(h)
        }else{
            //第七张图需放在第一排高度最小的照片下
            var minH = Math.min.apply(null,hArr);
            //判断一个值在数组出现的索引
            var minHIndex = $.inArray(minH,hArr);
            //value是Dom元素，不可使用jQuery对象，$(value)就可以将Dom对象value转换为jQuery对象
            $(value).css({
                'position':'absolute',
                'top':minH+'px',
                'left':minHIndex*w+'px'
            })
            hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
    })
}
//滚动加载
function checkScrollSlide(){
    //获取最后一个box
    var $lastBox = $("#design_main>div").last();
    //当滚动条加载到最后一个盒子高度的一半时就加载
    //距离页面顶部的距离+盒子自身高度的一半
    var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    //页面滚走的距离
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).Height();
    return (lastBoxDis<scrollTop+documentH)?true:false;			
}
