function initMap() {
    var initLocation = {lat: -34.9285, lng: 138.6007};
    var infowindow = new google.maps.InfoWindow(); 
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: initLocation
    });
    
    map.data.loadGeoJson('maps.json');
    
    // When the user clicks, open an infowindow
    map.data.addListener('click', function(event) {
	var desc = '<h1>' + event.feature.getProperty("description");
        
    infowindow.setContent("<div style='width:570px;'>"+desc+"</div>"+
      '</div>');
	// position the infowindow on the marker
	infowindow.setPosition(event.feature.getGeometry().get());
	// anchor the infowindow on the marker
	infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
	infowindow.open(map);
    });

    map.data.addListener('mouseover',function(event){
    var name = event.feature.getProperty("name");
    infowindow.setContent("<div>"+name+"</div>"+
      '</div>');
	// position the infowindow on the marker
	infowindow.setPosition(event.feature.getGeometry().get());
	// anchor the infowindow on the marker
	infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
	infowindow.open(map);
    });
}
 google.maps.event.addDomListener(window, 'load', initialize);
    
