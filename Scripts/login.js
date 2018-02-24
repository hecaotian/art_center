//返回随机数值
   window.onload=function(){
       function rn(min, max) {
            var rs = Math.ceil(Math.random() * (max - min) + min);
            return rs;
        }
        //返回指定范围的随机颜色
        function rc(min, max) {
            var r = rn(min, max);
            var g = rn(min, max);
            var b = rn(min, max);
            return `rgb(${r},${g},${b})`;
        }
        var s3 = document.getElementById("s3");
        function draw() {
            for (var i = 0; i < 100; i++) {
                drawCircle();
                //需实现的效果：当鼠标点击时圆变大，透明度变淡
                c.onmouseover = function () {
                    //定时器的this指向window，而实际需要指向c,因此使用预留this的方式
                    var that = this;
                    //为防止当前圆形再次被点击,再次点击就不生效                
                    that.onclick = null;
                    var t = setInterval(function () {
                        var r = that.getAttribute("r");//获取当前圆的半径
                        r *= 1.05;//变大
                        console.log(r);
                        that.setAttribute("r", r);
                        var p = that.getAttribute("fill-opacity");
                        p *= 0.9;//变小;
                        that.setAttribute("fill-opacity", p);
                        if (p < 0.01) {
                            clearInterval(t);
//                            s3.removeChild(that);
                            drawCircle();
                        }//当透明度变淡时删除指定的图形
                    }, 100);
                }
            }
        }
        function drawCircle() {
            c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("r", rn(5, 40));
            c.setAttribute("cx", rn(0, 1400));
            c.setAttribute("cy", rn(0, 600));
            c.setAttribute("fill", rc(0, 255));
            c.setAttribute("fill-opacity", Math.random());
            s3.appendChild(c);
        }
        draw();
   };
	//登录验证
(()=>{	
	//获得登录按扭
	var $btn=$("#btn");
	console.log($btn);
	//为登录按扭绑定单击事件
	$btn.click(()=>{
		var u = $("#uname").val();		
		var p = $("#upwd").val();
		var z = $("#code").val();
		//验证用户名和密码格式，不正确禁止提交
		var ureg = /^[a-z0-9]{3,8}$/i;//字母数字，3-8位
		var preg = /^[0-9]{3,8}$/;//数字，3-8位
		var zreg = /^[a-z0-9]{4}$/i;
		if(!ureg.test(u)){
			alert("用户名格式不正确，请检查");
			return;
		}
		if(!preg.test(p)){
			alert("密码格式不正确，请检查");
			return;
		}
		if(!zreg.test(z)){
			alert("验证码不正确，请检查");
			return;     
		}
		$.ajax({
			type:"post",
			url:"data/art_login.php",
			data:{uname:u,upwd:p,yzm:z},
			//成功接收到返回的数据
			success:function(data){					
				if(data.code==-1){
					alert(data.msg);
				}else{
					alert("登录成功");
					location.href="product_list.html"
				}
			},
			//出错：执行此方法	
			error:function(data){
				console.log("网络故障");
			},
		})	
	})	
})();
//功能二，验证码	
$("#yzm").click(function(){
	this.src="data/00_yzm.php";	
})