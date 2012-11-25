var map;
var parkLayer, openspaceLayer, publicartLayer, bikepathLayer, citylimitLayer, transitroutesLayer, neighborhoodLayer, policebeatLayer , femaexemptionLayer;
var park, openspace, publicart, bikepaths, citylimits, transitroutes, neighborhoods, policebeats , femaexemptions;
//$(document).ready(function () {
function initialize() { 
	var contentString = 'Hello';
	var infowindow = new google.maps.InfoWindow({
	        content: contentString
	    });
	var latlng = new google.maps.LatLng(37.09, -95.71);
	var options = {
	zoom: 5, 
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
// **************************  Markers init on Log in ****************//
/*
Pass a GET request to the index function in Locations model to get the locations marked by the user. 
*/
$.ajax({
	    type: "GET",
	    dataType: "json",
	    url: "/locations",
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
			url: "/locations",
			data: datastring,
			success: function(){}
		});

	});
    map = new google.maps.Map(document.getElementById('map'), options);
    parkLayer = new google.maps.KmlLayer('http://data.cabq.gov/community/parksandrec/parks/CityParks.kmz');
    openspaceLayer = new google.maps.KmlLayer('http://data.cabq.gov/community/openspace/CityOpenSpace.kmz');
    publicartLayer = new google.maps.KmlLayer('http://data.cabq.gov/community/art/publicart/PublicArt.kmz');
    bikepathLayer = new google.maps.KmlLayer('http://data.cabq.gov/community/bikepaths/BikePaths.kmz');
    citylimitLayer = new google.maps.KmlLayer('http://data.cabq.gov/government/citylimits/abqcitylimits.kmz');
    transitroutesLayer = new google.maps.KmlLayer('http://data.cabq.gov/transit/routesandstops/transitroutes.kmz');
    neighborhoodLayer = new google.maps.KmlLayer('http://data.cabq.gov/community/neighborhoods/NeighborhoodAssociations.kmz');
    policebeatLayer = new google.maps.KmlLayer('http://data.cabq.gov/publicsafety/policebeats/APD_BCSO_Beats.kmz');
    femaexemptionLayer = new google.maps.KmlLayer('http://data.cabq.gov/FEMA/FEMA_exemptions_CABQ.kmz');
    $('#park').attr('checked',false);
    $('#openspace').attr('checked',false);
    $('#publicart').attr('checked',false);
    $('#bikepaths').attr('checked',false);
    $('#citylimits').attr('checked',false);
    $('#transitroutes').attr('checked',false);
    $('#neighborhoods').attr('checked',false);
    $('#policebeats').attr('checked',false);
    $('#femaexemptions').attr('checked',false);
// *****************  End of markers functions ************   ///
// *****************  Start of Info Boxes ***************//
/*	var infowindow = new google.maps.InfoWindow({
	  content: 'Hello world'
	});infowindow.open(map, marker);
*/
}
function show() {  
                  park = $('#park').is(":checked");
                  openspace = $('#openspace').is(":checked");
                  publicart = $('#publicart').is(":checked");
                  bikepaths = $('#bikepaths').is(":checked");
                  citylimits = $('#citylimits').is(":checked");
                  transitroutes = $('#transitroutes').is(":checked");
                  neighborhoods = $('#neighborhoods').is(":checked");
                  policebeats = $('#policebeats').is(":checked");
                  femaexemptions = $('#femaexemptions').is(":checked");
                  if(park){
                    parkLayer.setMap(map);
                     }
                  else{
                    parkLayer.setMap(null);	
                  }
                  if (openspace) {
                    openspaceLayer.setMap(map);
                     }
                  else{
                  	openspaceLayer.setMap(null);
                  }
                  if(publicart) {
                    publicartLayer.setMap(map);
                     }
                  else{
                  	publicartLayer.setMap(null);
                  }
                  if(bikepaths) {
                     bikepathLayer.setMap(map);
                     }
                  else{
                  	 bikepathLayer.setMap(null);
                  }
                  if(citylimits) {
                     citylimitLayer.setMap(map);
                     }
                  else{
                  	citylimitLayer.setMap(null);
                  }   
                  if(transitroutes) {
                     transitroutesLayer.setMap(map);
                     }
                  else{
                  	transitroutesLayer.setMap(null);
                  }
                  if(neighborhoods){
                     neighborhoodLayer.setMap(map);
                     }
                  else{
                  	neighborhoodLayer.setMap(null);
                  }
                  if(policebeats){
                     policebeatLayer.setMap(map);
                     }
                  else{
                  	policebeatLayer.setMap(null);
                  }
                  if(femaexemptions){
                     femaexemptionLayer.setMap(map);
                     }
                  else{
                  	femaexemptionLayer.setMap(null);
                  }
        //$(":checkbox").attr("autocomplete", "off");
   }