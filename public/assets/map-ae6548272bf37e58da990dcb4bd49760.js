function initialize(){var e=new google.maps.LatLng(35.0787,-106.627),t={zoom:12,center:e,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,disableDoubleClickZoom:!0,noClear:!0,navigationControl:!0,navigationControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT}},n=new google.maps.InfoWindow;map=new google.maps.Map(document.getElementById("map"),t),$.ajax({type:"GET",dataType:"json",url:"/issues",success:function(e){for(var t=0;t<e.length;t++){var r=new google.maps.LatLng(e[t].latitude,e[t].longitude),i=new google.maps.Marker({position:r,map:map,title:"Click me"});google.maps.event.addListener(i,"click",function(t,r){return function(){n.setContent(e[r].title),n.open(map,t)}}(i,t))}}}),google.maps.event.addListener(map,"dblclick",function(e){var t=new google.maps.Marker({position:e.latLng,draggable:!0,map:map});google.maps.event.addListener(t,"click",function(){n.open(map,t)});var r=e.latLng.lat(),i=e.latLng.lng(),s="latitude="+r+"&longitude="+i;$.ajax({type:"POST",url:"/issues",data:s,success:function(){}})})};