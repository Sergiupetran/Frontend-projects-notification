

 function myfunction(){
 	var marks = document.querySelectorAll(".new");
 	var unread = document.querySelector(".unread");
 	var points = document.querySelectorAll(".fa-solid");
 	points.forEach(point =>{
 		point.style.display = "none";
 	})
 	unread.style.display = "none";
 	marks.forEach(mark =>{
 		mark.classList.remove("new");

 	})
 }