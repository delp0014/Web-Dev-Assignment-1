function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
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
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
    google.maps.event.addListener(marker, 'click', function()
    
  {
 
    infowindow.open(map, marker);
  });
}
        google.maps.event.addDomListener(window, 'load', initialize);
