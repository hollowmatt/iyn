// This function initializes the Google Map to Mountain View, with a zoomed in view
(function() {
	/***
	 * Setup our variables:
	 * - map -> this is the Google Map object
	 * - mapfilter -> what will will filter the markers based on
	 * - jsonData -> this will contain all of the info form our JSON object
	 ***/
	var map;
	var mapfilter = getMapFilters();
	var jsonData = getMapData();
	var auth = {
		consumerKey: "<consumerKey>",
		consumerSecret: "<consumerSecret>",
		accessToken: "<accessToken>",
		accessTokenSecret: "<accessTokenSecret>",
		serviceProvider: {
			signatureMethod: "HMAC-SHA1"
		}
	};

	/***
	 * initialize()
	 *	 This function will Setup the initial page,
	 *	 with map centered on the first city in the
	 * 	 data from the JSON file
	 ***/
	function initialize() {
		//build the map with the first city
		buildMap(jsonData.cities[0].lat, jsonData.cities[0].lon, jsonData.cities[0].zoom);
	  //add markers to the map from the data
	  addMarkers(jsonData.cities[0].places);
	}

	/***
	 * buildMap(lat, lon, zoom)
	 *	Setup the map
	 *	- Take in the lat/lon for the map
	 *  - setup the map options
	 ***/
	function buildMap(lat, lon, zoom) {
		var currentCity =  new google.maps.LatLng(lat,lon); //city data passed in
		var mapOptions = {
	    zoom: zoom,
	    center: currentCity
	  };

	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	  //TODO: Remove this event listener once we have all the markers we need in our
	  //			JSON file
	  google.maps.event.addListener(map, 'click', function(event) {
	  	addMarker(event.latLng);
	  });
	}

	/***
	 * filterModel()
	 *	This is the KnockoutJS model for the page
	 *	 - Filter the markers
	 *	 - load the City selector
	 ***/
	function filterModel() {
		var self = this;

		//Filters for the markers
		self.markers = [
			{ "name": "All" },
			{ "name": "Restaurants" },
			{ "name": "Bars" }];
		self.chosenMarker = ko.observable();
		self.resetMarker = function() { self.chosenMarker(null)};

		//Load the city selector
		self.cities = jsonData.cities;
		self.chosenCity = ko.observable();
		self.chosenCity.subscribe(function() {
			buildMap(self.chosenCity().lat, self.chosenCity().lon, self.chosenCity().zoom);
			addMarkers(self.chosenCity().places);
		});
	}

	/***
	 * addMarkers(markers)
	 * 	This takes in an array of places from the JSON data, and will
	 *	call the addMarker function for each place
	 ***/
	function addMarkers(markers) {
		for (var location in markers) {
			loc = new google.maps.LatLng(markers[location].lat, markers[location].lon);
			addMarker(loc, markers[location].content, markers[location].yelp, markers[location].name);
		}
	}

	/***
	 * addMarker(location, info, name)
	 *	This will add a marker to the map
	 *	 - location is where on the map
	 *	 - info is what shows up in the box when you click the marker
	 *	 - name is the name of the location
	 ***/
	function addMarker(location, info, yelp, name) {
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: name
		});

		if (yelp) {
			yelpinfo = getYelpInfo(yelp);
			for (var i = 0; i < yelpinfo.length; i++) {
				info.push(yelpinfo[i]);
			};
		}

		google.maps.event.addDomListener(marker, 'rightclick', function() {
  		removeMarker(marker);
  	});

		var infoWindow = new google.maps.InfoWindow({
			content: info.join('')
		});

  	google.maps.event.addDomListener(marker, 'click', function() {
  		infoWindow.open(map, marker);
  	})
	}

	/***
	 * getYelpInfo(query)
	 *	This will make an API call to yelp to get content back, to insert into
	 *	the marker InfoBox
	 ***/
	function getYelpInfo(query) {
		// This chunk of code comes from a GoogleGroups forum on using Yelp v2 API with JS
		// https://groups.google.com/forum/#!topic/yelp-developer-support/5bDrWXWJsqY
		// Yelp API is complicated: https://www.yelp.com/developers/documentation/v2/authentication
		var parameters = [];
		parameters.push(['callback', 'cb']);
		parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

    var accessor = {
      consumerSecret : auth.consumerSecret,
      tokenSecret : auth.accessTokenSecret
    };

    var message = {
    	'action': query,
    	'method': 'GET',
    	'parameters': parameters
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    console.log(parameterMap);

    var yelpResults = [];
		$.ajax({
			 url: message.action,
			 async: false,
			 data: parameterMap,
			 dataType: "jsonp",
			 cache: true
		}).success(function(data, textStats, XMLHttpReqeust) {
			var busPhone = data.businesses[0].display_phone;
			var busRating = data.businesses[0].rating_img_url;
			yelpResults.push("<div class='infoyelplogo'><img src='images/yelp_logo_75x38.png");
			yelpResults.push("<p>Phone number: " + busPhone + "</p>");
			yelpResults.push("<p><img src='" + busRating + "'>");
			console.log(yelpResults);
			return yelpResults;
		}).error(function(e) {
			console.log("an error has occured");
			console.log(e);
		});
	}

	/***
	 * removeMarker(marker)
	 * 	This will remove a marker from the map
	 *	TODO: Remove this function, used for map setup of JSON data
	 ***/
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
