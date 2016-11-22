var tf = true;
var td = true;
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
		if(td){
		nav_personal.style.display = "none";
		td = false;
	}else{
		nav_personal.style.display = "block";
		td = true;
	}
}