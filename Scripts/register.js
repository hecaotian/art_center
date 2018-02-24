$(()=>{
	//获取用户输入的信息
		var uname=$("[name='uname']");	
		var upwd=$("[name='upwd']");		
		var ppwd=$("[name='ppwd']");
		var email=$("[name='email']");
		var phone=$("[name='phone']");
	//为注册提交按扭建立绑定事件		
	$("#subb").click(function(e){
		e.preventDefault();
		$.ajax({
			type:"post",
			url:"data/register.php",
			data:$("form").serialize(),
			success:function(data){
				if(!data){
					alert("注册失败！");
				}else{
					alert("注册成功");
					location.href="index.html"
				}
			},
			error:function(){
				alert("网络故障");
			}
		})		
		})
	})
	
