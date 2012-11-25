var map;
var parkLayer, openspaceLayer, publicartLayer, bikepathLayer, citylimitLayer, transitroutesLayer, neighborhoodLayer, policebeatLayer , femaexemptionLayer;
var park, openspace, publicart, bikepaths, citylimits, transitroutes, neighborhoods, policebeats , femaexemptions;
function mashup(){
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
   }