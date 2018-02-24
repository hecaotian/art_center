(()=>{		
	var aabox=
		document.getElementById("aabox");		
	var abbox=
		document.getElementById("abbox");
	var layer=
		document.getElementById("main_shade");	
	var scroll_height=document.body.scrollHeight;
		abbox.style.top = parseInt(abbox.style.top)+ "px";	
			aabox.onmousemove=()=>{
				if(abbox.style.top=0+'px'){
					abbox.style.top=80+'px';
					layer_move();
				}else{
					abbox.style.top=80+'px';					
				}
			}
			aabox.onmouseout=()=>{
				abbox.style.top=0+'px';
				layer_out();
			}
		//遮罩层
		function layer_move(){
			layer.ClassName="main_shade";
			layer.style.top=592+"px";
			layer.style.height=scroll_height-592+"px";
		}
		function layer_out(){
			layer.ClassName="";
			layer.style.top="";
			layer.style.height="";
		}
	//第二个
	var bbbox=
		document.getElementById("bbbox");		
	var bbbox1=
		document.getElementById("bbbox1");
	bbbox1.style.top = parseInt(bbbox1.style.top)+ "px";
		bbbox.onmousemove=()=>{
				if(bbbox1.style.top=-28+'px'){
					bbbox1.style.top=80+'px';
					layer_move();
				}else{
					bbbox1.style.top=-28+'px';
				}
			}
		bbbox.onmouseout=()=>{
			bbbox1.style.top=-28+'px';
			layer_out();
		}
	//第四个
	var ccbox=
		document.getElementById("ccbox");		
	var ccbox1=
		document.getElementById("ccbox1");
	ccbox1.style.top = parseInt(ccbox1.style.top)+ "px";
		ccbox.onmousemove=()=>{
				if(ccbox1.style.top=-80+'px'){
					ccbox1.style.top=80+'px';
					layer_move();
				}else{
					ccbox1.style.top=-80+'px';
				}
			}
		ccbox.onmouseout=()=>{
			ccbox1.style.top=-80+'px';
			layer_out();
		}
	//第五个
	var ddbox=
		document.getElementById("ddbox");		
	var ddbox1=
		document.getElementById("ddbox1");
	ddbox1.style.top = parseInt(ddbox1.style.top)+ "px";
		ddbox.onmousemove=()=>{
				if(ddbox1.style.top=-95+'px'){
					ddbox1.style.top=80+'px';
					layer_move();
				}else{
					ddbox1.style.top=-95+'px';
				}
			}
		ddbox.onmouseout=()=>{
			ddbox1.style.top=-95+'px';
			layer_out();
		}
		var aarr = [];
	$.ajax({
		type:"get",
		url:"data/detail.php",
		success:function(data){
			var arr = [];
			for(var i =0;i<data.length;i++){				
				var item = data[i];
				if (item.uid == Math.ceil((i+1)/3)){				
					arr.push(data[i]);}				
				if ((i+1)%3 == 0 && i!=0 || i==data.length)
				{
					aarr.push(arr);
					arr = [];					
				}					
			}			
			var html =`<div class="thing_title"></div>`;			
			for(var item of aarr){		
				console.log(item);
				var time= new Date(parseInt(item.shelf_time));
				var sj = time.getFullYear()+"年"+(time.getMonth()+1)+"月";	
				html +=`<div class="details_show">
				<div class="details_img">
					<div class="bigImg" style="left:0px;">
						<img src=${item[2].lg} class="my-big">
						<img src=${item[0].lg} class="my-big">
						<img src=${item[1].lg} class="my-big">
						<img src=${item[2].lg} class="my-big">
						<img src=${item[0].lg} class="my-big">
					</div>
					<div class="ar">
						<a href=${item.uid} class="arleft">
							<img src="images/index/arleft.gif">
						</a>
						<a href=${item.uid} class="arright">
							<img src="images/index/arright.gif" >
						</a>
					</div>
					<div class="imgShow">
						<div><img src=${item[0].sm} data-z = 2 data-target=${item[0].lg} class="my-small"></div>
						<div><img src=${item[1].sm} data-z = 1 data-target=${item[1].lg} class="my-small"></div>
						<div><img src=${item[2].sm} data-z = 0 data-target=${item[2].lg} class="my-small"></div>					
					</div>
				</div>
				<div class="imgText">
					<div class="tList">
						<span>产品名称</span>
						<span class="thing-right"><a href="javascript:;">${item[0].pname}</a>	
						</span>
					</div>
					<div class="tList">
						<span>上市时间</span>
						<span class="thing-right">${sj}</span>
					</div>
					<div class="tList">
						<span>产品来源</span>
						<span class="thing-right"><a href="javascript:;">${item[0].psource}</a></span>
					</div>
					<div class="tList">
						<span>产品信息</span>
						<span class="thing-right">${item[0].pinfo}</span>
					</div>
				</div>
				</div>`;			
			}
			$("#content").html(html);		
		var imgLen = 3; //图片总数	
		var bigImg = $(".bigImg");		
		var details_img = $(".details_img");//获取最外层div元素details_img	
		var newleft = parseInt(bigImg.css("left"))+615;		
		//实现轮播效果
		// $(".imgShow").mouseover(function(e){
		// 	var $tar = $(e.target)			
		// 	if ($tar.hasClass("my-small")) {
		// 		//设置class为my-big的src为自己的target属性值
		// 		$(".my-big").attr("src", $tar.data("target"));
		// 	}
		// })
		var imgShow = $(".imgShow>div img");
		imgShow.hover(function(){
			console.log(newleft);			
			$(this).parents(".imgShow")
			.siblings(".bigImg")
			.css("left",-newleft*(parseInt($(this).attr("data-z"))))		
		});

//		 function animation(offset){
		 			
//		 	bigImg.css("left",newleft+'px');
//		 	if(newleft<-(imgLen-1)*615){
//		 		bigImg.css("left",0+'px');
//		 	}	
//		 	if(newleft>0){
//		 		bigImg.css("left",-(imgLen-1)*615+'px');
//		 	}			
//		 }
		//为按扭绑定事件
//		$("#content").on("click","a.arleft",function(e){		
//			e.preventDefault();					
//			animation(-615);
//		});
//		$("#content").on("click","a.arright",function(e){
//			e.preventDefault();			
//			animation(615);
//		});
//		 var timer = setInterval(function(){
//		 	animation(-615);
//		 },5000);
//		// $("#content").click(e=>{
		// 	var $tar = $(e.target);
		// 	if($tar.hasClass("my-small")){
		// 		$(".my-big").attr("src",$tar.data("target"));
		// 	}		
		// });
		},
		error:function(){
			alert("网络故障");
		}
	})	

})();

