function initMap() {
  var adelaide = {lat: -34.9285, lng: 138.6007};
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: adelaide
  });
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Video in Info Window</h1>'+
      '<div id="bodyContent">'+
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/0vDSq1XcOTE" frameborder="0" allowfullscreen></iframe>'+
      '</div>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: adelaide,
    map: map,
    title: 'Adelaide'
  });
    google.maps.event.addListener(marker, 'click', function()
    
  {
 
    infowindow.open(map, marker);
  });
}
        google.maps.event.addDomListener(window, 'load', initialize);
