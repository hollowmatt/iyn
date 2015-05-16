// This function initializes the Google Map to Mountain View, with a zoomed in view
(function() {
	var map;
	var mapfilter = { "1": "All", "2": "Restaurants", "3": "Bars" };
	var markers = {
		"places" :[
			{"type": "Bar", "name": "Tied House", "lat": "37.394575342727734", "lon": "-122.08069235086441", "content": "Makes great beer"},
			{"type": "Bar", "name": "Steins Beer Garden", "lat": "37.39407883199609", "lon": "-122.07989037036896", "content": "Makes great beer"},
			{"type": "Restaurant", "name": "Starbucks", "lat": "37.38754504105412", "lon": "-122.08302319049835", "content": "Makes great coffee"},

		]
	};

	// Setup initial page, with map centered on Mountain View, CA
	function initialize() {
		var mountainView =  new google.maps.LatLng(37.3860517,-122.0838511); //Mountain View, CA

		var mapOptions = {
	    zoom: 15,
	    center: mountainView
	  };

	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	  //add marker on click
	  google.maps.event.addListener(map, 'click', function(event) {
	  	addMarker(event.latLng);
	  });
	  for (var place in markers.places) {
	  	currLoc = new google.maps.LatLng(markers.places[place].lat, markers.places[place].lon);
	  	info = markers.places[place].content;
	  	name = markers.places[place].name;
	  	addMarker(currLoc, info, name);
	  }
	  $.getJSON('./data/mapdata.json', function(json) {
	  	console.log(json);
	  });
	}

	// Filter the markers
	function filterModel() {
		this.markers = [
			{ "name": "All" },
			{ "name": "Restaurants" },
			{ "name": "Bars" }];
		this.chosenMarker = ko.observable();
		this.resetMarker = function() { this.chosenMarker(null)};
	}

	// Add a marker
	function addMarker(location, info, name) {
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: name
		});

		google.maps.event.addDomListener(marker, 'rightclick', function() {
  		removeMarker(marker);
  	});

		var infoWindow = new google.maps.InfoWindow({
			content: info
		});

  	google.maps.event.addDomListener(marker, 'click', function() {
  		infoWindow.open(map, marker);
  	})
	}

	// Remove a marker from the map
	function removeMarker(marker) {
		console.log(marker);
		marker.setVisible(false);
	}

	//Do the good stuff
	ko.applyBindings(new filterModel());
	google.maps.event.addDomListener(window, 'load', initialize);
})();
