$(()=>{
		ajax({
		type:"get",
		url:"floor3.html",
	}).then(data=>{
//		console.log(data);
		var main_floor3=document.getElementById("main_floor3");
		main_floor3.innerHTML=data;
	})
});
 
