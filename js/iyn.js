// This function initializes the Google Map to Mountain View, with a zoomed in view
(function() {
	var map, places, place;
	var markers = [];
	var autocomplete;
	var mapfilter = { "1": "All", "2": "Restaurants", "3": "Bars" };
	var countryRestrict = { 'country': 'us' };
	var markers = {
		"places" :[
			{"type": "Bar", "name": "Tied House", "lat": "38.4", "lon": "-122.1", "content": "Makes great beer"},
			{"type": "Restaurant", "name": "Starbucks", "lat": "37.38626", "lon": "-122.085", "content": "Makes great coffee"}
		]
	};


	function initialize() {
		var mountainView =  new google.maps.LatLng(37.3860517,-122.0838511); //Mountain View, CA

		var mapOptions = {
	    zoom: 15,
	    center: mountainView
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	  for (var place in markers.places) {
			var marker = new google.maps.Marker({
	      position: mountainView,
	      map: map,
	      title: markers.places[place].name
	  	});
	  	var infoWindow = new google.maps.InfoWindow({
	  		content: markers.places[place].content
	  	});
	  	google.maps.event.addDomListener(marker, 'click', function() {
	  		infoWindow.open(map, marker);
	  	});
	  	console.log(marker);
	  }
	}

	function filterModel() {
		this.markers = [
			{ "name": "All" },
			{ "name": "Restaurants" },
			{ "name": "Bars" }];
		this.chosenMarker = ko.observable();
		this.resetMarker = function() { this.chosenMarker(null)};
	}

	function addMarkers() {
		for (var place in markers.places) {
			console.log(markers.places[place].lat + "," + markers.places[place].lon);
			var myLatlng = google.maps.LatLng(markers.places[place].lat, markers.places[place].lon);

			var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: markers.places[place].name
	  	});
	  	console.log(marker);
		}
	}

	//Do the good stuff
	ko.applyBindings(new filterModel());
	google.maps.event.addDomListener(window, 'load', initialize);
})();