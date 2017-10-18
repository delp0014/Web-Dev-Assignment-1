function initMap() {
    var adelaide = {lat: -34.9285, lng: 138.6007};
    var infowindow = new google.maps.InfoWindow(); 
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: adelaide
  });
    map.data.loadGeoJson('map.json');
    
    // When the user clicks, open an infowindow
    map.data.addListener('click', function(event) {
	var myHTML = event.feature.getProperty("description");
	//infowindow.setContent("<div style='width:150px;'>"+myHTML+"</div>"); //try put the video infowindow code here (content string) and then use event.feature.getURL("URL")
    infowindow.setContent("<div style='width:570px;'>"+myHTML+"</div>"+
      '<div id="bodyContent">'+
      '<iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>'+
      '</div>'+
      '</div>');
	// position the infowindow on the marker
	infowindow.setPosition(event.feature.getGeometry().get());
	// anchor the infowindow on the marker
	infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
	infowindow.open(map);
});
    
}
 google.maps.event.addDomListener(window, 'load', initialize);
    