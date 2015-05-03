// This function initializes the Google Map to Mountain View, with a zoomed in view
var map, places, place;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'us' };

var countries = {
  'us': {
    center: new google.maps.LatLng(37.1,-95.7),
    zoom: 3
  }
};

function initialize() {

	var mapOptions = {
    zoom: countries['us'].zoom,
    center: countries['us'].center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
    types: [ '(cities)' ],
    componentRestrictions: countryRestrict
  });

  places = new google.maps.places.PlacesService(map);

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    place_changed();
  });

}

function place_changed() {
  place = autocomplete.getPlace();
  console.log(place.geometry.location);
  map.panTo(place.geometry.location);
  map.setZoom(16);
  // search();
}




google.maps.event.addDomListener(window, 'load', initialize);
