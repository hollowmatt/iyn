// This function initializes the Google Map to Mountain View, with a zoomed in view
function initialize() {
  var mapOptions = {
    center: { lat: 37.3894, lng: -122.0755},
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);