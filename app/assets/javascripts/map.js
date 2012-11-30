
function initialize() 
{	
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
				// pass the category from the data.
				var category = data[i].category;
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
	

	
// *****************  End of markers functions ************   ///

// *****************  Start of Info Boxes ***************//


            <!--Load Markers-->
                    var markers = [];
                    for (var i = 0, dataMarkers; dataMarkers = data[i]; i++) {
                      var latLng = new google.maps.LatLng(dataMarkers.lat, dataMarkers.lng);
                      var marker = new google.maps.Marker({
                        position: latLng,
                        title: dataMarkers.title,
                        date: dataMarkers.date,
                        time: dataMarkers.time,
                        desc: dataMarkers.desc,
                        img: dataMarkers.img,
                        add: dataMarkers.address,
                        cat: dataMarkers.cat,
                        map: map
                      });

            <!--Display InfoWindows-->    
                    var infowindow = new google.maps.InfoWindow({
                            content: " "
                          });
                          google.maps.event.addListener(marker, 'click', function() {
                            infowindow.setContent('<div id="mapCont"><img class="mapImg" src="'+this.img+'"/>' +
                                                  '<div class="mapTitle">'+this.title+'</div>' + 
                                                  this.category +	
                                                  '<p>'+this.description+'</p></div>');
                            infowindow.open(map, this);
                          });

                      markers.push(marker);
                    }



/*	var infowindow = new google.maps.InfoWindow({
	  content: 'Hello world'
	});infowindow.open(map, marker);
	
*/


}