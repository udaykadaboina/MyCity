window.onload = getMyLocation;
function getMyLocation() {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(displayLocation);
} else {
	alert("Oops! no geolocation support");
}
}

function displayLocation(position) {
var latitude = position.coords.latitude; 
var longitude = position.coords.longitude;
var div = document.getElementById("location");
//div.innerHTML = "Your current location is " + latitude + "," + longitude;
document.getElementById("issue_latitude").value = latitude;
document.getElementById("issue_longitude").value = longitude;
}