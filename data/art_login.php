<?php 
	session_start();
    require_once("init.php");	
    @$uname=$_REQUEST["uname"];
    @$upwd=$_REQUEST["upwd"]; 
	@$uyzm=$_REQUEST["yzm"];/*获取用户输入的验证码*/
	/*获取系统生成的验证码*/
	if($uyzm!=$_SESSION["captcha"]){
//		console.log($_SESSION["captcha"]);
		echo '{"code":-2,"msg":"验证码有误，请检查"}';
		exit;
	}
    $sql="select * from user where uname='$uname' and upwd='$upwd'"; 
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);
    if($row==null){
      echo '{"code":-1,"msg":"用户名或密码有误"}';
    }else{
      echo '{"code":1,"msg":"登录成功"}';		
    }
