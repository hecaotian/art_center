<?php
	@$uname=$_REQUEST['uname'] or die ("uname required");		
	@$upwd=$_REQUEST['upwd'] or die ("upwd required");	
	@$email=$_REQUEST['email'] or die ("email required");
	@$phone=$_REQUEST['phone'] or die ("phone required");	
	$conn = mysqli_connect("127.0.0.1","root","","art_center",3306);
	$sql = "set names utf8";
	$result = mysqli_query($conn,$sql);
	#3接SQL语句
	$sql ="INSERT INTO user VALUES(null,'$uname','$upwd','$email','$phone')";	
	#4执行插入操作
	$result = mysqli_query($conn,$sql);
	#5判断
	if($result==true){
		echo "注册成功";
	}else{
		echo "注册失败";
	}
?>
