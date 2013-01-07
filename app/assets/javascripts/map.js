
function initialize() 
{	
	var contentString = 'Hello';
	var infowindow = new google.maps.InfoWindow({
	        content: contentString
	    });

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

map = new google.maps.Map(document.getElementById('map'), options);

// **************************  Markers init on Log in ****************//
/*
Pass a GET request to the index function in Locations model to get the locations marked by the user. 

*/

$.ajax({
	    type: "GET",
	    dataType: "json",
	    url: "/issues",
	    success: function(data){
			for( var i=0; i<data.length; i++ ){
				// Pass the latitude and longitude from data to maps.
				var marker_latlng= new google.maps.LatLng(data[i].latitude,data[i].longitude);
				var marker = new google.maps.Marker({
					position: marker_latlng, 
					map: map,
					title: 'Click me', 
					});
						google.maps.event.addListener(marker, 'click', function() {
						      infowindow.open(map,marker);
						    });
					
				}
			}
	});	
	
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
	

/*
// +++++++ UNM Data ++++++++//
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
			url: "http://search.unm.edu/maps/locationinfo/gyms.json",
			data: datastring,
			success: function(){}
		});

	});
	

*/


$.ajax({
	    type: "GET",
	    dataType: "json",
	    url: "http://search.unm.edu/maps/locationinfo/gyms.json",
	    success: function(data){
			for (var i = 0, length = json.length; i < length; i++) {
			  var data = json[i],
			      latLng = new google.maps.LatLng(data.lat, data.lng); 

			  // Creating a marker and putting it on the map
			  var marker = new google.maps.Marker({
			    position: latLng,
			    map: map,
			    title: data.title
			  });
			}
		}
	});	


// +*+*+*+*+*+*+*+



// *****************  End of markers functions ************   ///

// *****************  Start of Info Boxes ***************//



/*	var infowindow = new google.maps.InfoWindow({
	  content: 'Hello world'
	});infowindow.open(map, marker);
	
*/


}