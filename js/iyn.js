// This function initializes the Google Map to Mountain View, with a zoomed in view
function initialize() {
  var mapOptions = {
    center: { lat: 37.3894, lng: -122.0755},
    zoom: 16
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
  	document.getElementById('legend'));
  //  map.set('styles', [
	//   {
	//     featureType: 'road',
	//     elementType: 'geometry',
	//     stylers: [
	//       { color: '#000000' },
	//       { weight: 1.6 }
	//     ]
	//   }, {
	//     featureType: 'road',
	//     elementType: 'labels',
	//     stylers: [
	//       { saturation: -100 },
	//       { invert_lightness: true }
	//     ]
	//   }, {
	//     featureType: 'landscape',
	//     elementType: 'geometry',
	//     stylers: [
	//       { hue: '#ffff00' },
	//       { gamma: 1.4 },
	//       { saturation: 82 },
	//       { lightness: 96 }
	//     ]
	//   }, {
	//     featureType: 'poi.school',
	//     elementType: 'geometry',
	//     stylers: [
	//       { hue: '#fff700' },
	//       { lightness: -15 },
	//       { saturation: 99 }
	//     ]
	//   }
	// ]);
}
google.maps.event.addDomListener(window, 'load', initialize);