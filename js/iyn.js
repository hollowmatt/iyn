// This function initializes the Google Map to Mountain View, with a zoomed in view
(function() {
	var map;
	//Load data from JSON
	var mapfilter = getMapFilters();
	var jsonData = getMapData();

	// Setup initial page, with map centered on Mountain View, CA
	function initialize() {

		buildMap(jsonData.cities[0].lat, jsonData.cities[0].lon, jsonData.cities[0].zoom);

	  //add marker on click
	  google.maps.event.addListener(map, 'click', function(event) {
	  	addMarker(event.latLng);
	  });
	  // for (var place in markers.places) {
	  // 	currLoc = new google.maps.LatLng(markers.places[place].lat, markers.places[place].lon);
	  // 	info = markers.places[place].content;
	  // 	name = markers.places[place].name;
	  // 	addMarker(currLoc, info, name);
	  // }
	}

	/***
	 * Setup the map
	 *	- Take in the lat/lon for the map
	 *  - setup the map options
	 ***/
	function buildMap(lat, lon, zoom) {
		var defaultCity =  new google.maps.LatLng(lat,lon); //element zero
		var mapOptions = {
	    zoom: zoom,
	    center: defaultCity
	  };

	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}
	/***
	 * This is the KnockoutJS model for the page
	 *	 - Filter the markers
	 *	 - load the City selector
	 ***/
	function filterModel() {
		//Filters for the markers
		this.markers = [
			{ "name": "All" },
			{ "name": "Restaurants" },
			{ "name": "Bars" }];
		this.chosenMarker = ko.observable();
		this.resetMarker = function() { this.chosenMarker(null)};

		//Load the city selector
		console.log("Put out the cities");
		console.log(jsonData);
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

	/***
	 * Do the good stuff here
	 *	//1: Setup the KnockoutJS model for the lists
	 *	//2: Call our initialize function
	 ***/
	ko.applyBindings(new filterModel());
	google.maps.event.addDomListener(window, 'load', initialize);
})();
