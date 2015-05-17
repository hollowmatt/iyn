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
	var jsonData;

	/*
		Plan:
			1) Load the JSON data file
			2) Present a 'city' selector on the screen
			3) on change, load the map from the selected city's data
			4) place the markers on the map
		IF:
			there is already a set of data in memory, changing the city will update the data.
	*/

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

		jsonData = (function () {
	    jsonData = null;
	    $.ajax({
	        'async': true,
	        'global': false,
	        'url': './data/mapdata.json',
	        'dataType': "json",
	        'success': function (data) {
	            jsonData = data;
	    		}
    	});
    	return jsonData;
		})();
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

	//city selector
	function cityModal() {
		this.cities = jsonData.cities;
		this.chosenCity = ko.observable();
		this.setMap = function() { console.log(this)};
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
