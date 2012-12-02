var map;

function show() {  				
				initialize();
				for (i=0;i < total_data_sets;i++) {
					var value = new google.maps.KmlLayer(stuff[i]);
					value.setMap(null);
					if ($('#'+i).is(":checked"))
						value.setMap(map); 	
								
				}

}