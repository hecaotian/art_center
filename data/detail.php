<?php
	require_once("init.php");
	$sql = "SELECT * FROM detials INNER JOIN art_pic ON detials.uid=art_pic.uid ";
//	$sql = "select lg,sm from art_pic where uid=1";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>