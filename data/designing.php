<?php
	require_once("init.php");
	$sql = "select * from design";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($row);
?>