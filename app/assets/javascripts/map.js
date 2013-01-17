
function initialize() {	
	var latlng = new google.maps.LatLng(35.0787, -106.6270);
	var options = {
	zoom: 12, 
	center: latlng, 
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	disableDoubleClickZoom: true,
	noClear: true,
	navigationControl: true,
	navigationControlOptions: {
		position: google.maps.ControlPosition.TOP_RIGHT
	}
};
var infowindow = new google.maps.InfoWindow();

map = new google.maps.Map(document.getElementById('map'), options);

$.ajax({
	type: "GET",
    dataType: "json",
    url: "/issues",
    success: function(data){
		for(var i=0; i<data.length; i++ ){
		// Pass the latitude and longitude from data to maps.
			var marker_latlng= new google.maps.LatLng(data[i].latitude,data[i].longitude);
			var marker = new google.maps.Marker({
				position: marker_latlng, 
				map: map,
				title: 'Click me', 
			}); // marker

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
	    	    return function(){
	    	    //	var link = '<a href="/issues/' + i + '">' + data[i].title + '</a>';
	    	    	var link = '<a href="http://abqcity.herokuapp.com/issues/#'+ [i] + '">' + data[i].title + '</a>';
	    	    //	var link = '<a href="http://abqcity.herokuapp.com/issues" >' + data[i].length + '</a>';
	    	    //	infowindow.setContent(data[i].title);
	    	    	infowindow.setContent(link);
	    	    	infowindow.open(map,marker);
	    	    }
		    })(marker, i));
					
		} //for-loop
	} //success-fn
}); //ajax-request	
	
/* This particular sends an Ajax request to the controller to add the latitude and longitude of the points where there is a double click */	

google.maps.event.addListener(map, 'dblclick', function(event) {
		var marker = new google.maps.Marker({position: event.latLng, draggable: true, map: map});
		google.maps.event.addListener(marker, 'click', function() {
    	    infowindow.open(map,marker);
	    });
		var latitude=event.latLng.lat();
		var longitude=event.latLng.lng(); 
		var datastring = 'latitude=' + latitude + '&longitude=' + longitude;
		$.ajax({
			type: "POST",
			url: "/issues",
			data: datastring,
			success: function(){}
		});

	});

}