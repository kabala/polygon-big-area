function initMap () {
  google.maps.visualRefresh = true;

  var mapOptions = {
    center: new google.maps.LatLng(-0.1831986, -78.4856216),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  var mapElement = document.getElementById('mapper');

  var map = new google.maps.Map(mapElement, mapOptions);

  var coords = [
    {lat: -0.18334530299048757, lng: -78.48471477627754},
    {lat: -0.18389515297395112, lng: -78.48491594195366},
    {lat: -0.18390319955955445, lng: -78.48403617739677},
    {lat: -0.18326215493654757, lng: -78.48407104611397},
  ];

  var bloque = new google.maps.Polygon({
    paths: coords,
    strokeColor: '#ff0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#ff0000',
    fillOpacity: 0.35
  }).setMap(map);

  var verify = bloque.containsLatLng(-0.1831986, -78.4856216);

  console.log(verify);
}


// create polygon for testing purposes.




google.maps.event.addDomListener( window, 'load', initMap );