$(()=>{
		ajax({
		type:"get",
		url:"main.html",
	}).then(data=>{	
		var details_main=document.getElementById("details_main");
		details_main.innerHTML=data;
	})
});