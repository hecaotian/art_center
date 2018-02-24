(()=>{
//step1:先查找需要绑定事件的元素
		var arleft=document.getElementsByClassName('arleft')[0],
			arright=document.getElementsByClassName('arright')[0],
		//获取s_list	
			s_list=document.getElementsByClassName('s_list')[0],	
			designer=(document.getElementsByClassName('designer')[0].offsetWidth+87)*5;
		//step2:为左右按扭绑定单击事件   
		var n=0;
        arleft.onclick=function(){	
			console.log("dsaDSD");
			if(n>0)
            s_list.style.left=-designer*(--n)+"px";
        }
        arright.onclick=function () {
            var ss=parseInt(s_list.style.left);
			var a=Math.ceil(s_list.children.length/5)-1;	
//			console.log(n);
			if(n<a){
				s_list.style.left=-designer*(++n)+"px";
			}			
        }

})()	

	