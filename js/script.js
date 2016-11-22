var tf = true;
var city = document.getElementById("city");
var city_nav = document.getElementById("nav_city");
var personal = document.getElementById("personal");
var nav_personal = document.getElementById("nav_personal")

city.onclick = function(){
	if(tf){
		city_nav.style.display = "none";
		tf = false;
	}else{
		city_nav.style.display = "block";
		tf = true;
	}
}
personal.onclick = function(){
		if(tf){
		nav_personal.style.display = "none";
		tf = false;
	}else{
		nav_personal.style.display = "block";
		tf = true;
	}
}