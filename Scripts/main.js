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
	//导航条定位
//	var header=document.getElementById('header');
//	var main_logo=
//		document.getElementsByClassName("main_logo")[0].offsetHeight;		
//	window.onscroll=function(){
//		var body_height=document.documentElement.scrollTop;		
//		if(body_height>main_logo){
//			header.style.position="fixed";
//		}else{
//			header.style.position="relative";
//		}
//	}


	

	})()
