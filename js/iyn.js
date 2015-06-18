'use strict';
// This function initializes the Google Map to Mountain View, with a zoomed in view
(function() {
	/***
	 * Setup our variables:
	 * - map -> this is the Google Map object
	 * - jsonData -> this will contain all of the info form our JSON object
	 ***/
	var map;
	var jsonData = getMapData();
	var availableItems = [];
	var currWindow = null;
	var currMarker = null;

	//Removed keys
	var auth = {
		consumerKey: '<consumerKey>',
		consumerSecret: '<consumerSecret>',
		accessToken: '<accessToken>',
		accessTokenSecret: '<accessTokenSecret>',
		serviceProvider: {
			signatureMethod: 'HMAC-SHA1'
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
		//set title
		setTitle(jsonData.cities[0].Name);
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
	    center: currentCity,
	    disableDefaultUI: true
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  availableItems = [];
	}

	/***
	 * setTitle(city)
	 * 	Set the header title
	 *	- Take in the city name to put in the title
	 ***/
	function setTitle(city) {
		$('.title').text(city + ': Things to see and do');
		$('.list-header').text(city + ': places');
	}

	/***
	 * filterModel()
	 *	This is the KnockoutJS model for the page
	 *	 - load the City selector
	 ***/
	function filterModel() {
		var self = this;
		self.cities = jsonData.cities;
		self.chosenCity = ko.observable();
		self.chosenCity.subscribe(function() {
			buildMap(self.chosenCity().lat, self.chosenCity().lon, self.chosenCity().zoom);
			setTitle(self.chosenCity().Name);
			$('#filtered-results').empty();
			addMarkers(self.chosenCity().places);
		});
	}

	/***
	 * addMarkers(markers)
	 * 	This takes in an array of places from the JSON data, and will
	 *	call the addMarker function for each place
	 ***/
	function addMarkers(markers) {
		markers.forEach(function(location) {
			var loc = new google.maps.LatLng(location.lat, location.lon);
			var content = location.content;
			var yelp = location.yelp;
			var name = location.name;
			var title = location.title;
			var type = location.type;
			addMarker(loc, content, yelp, name, title, type);
		});
		setListStyle();
		$('#search-list').autocomplete({source: availableItems});
		$('#search-list').on('autocompleteselect', function(event, ui) {
			var selected = ui.item.value;
			$('#' + selected + '-li').click();
			//now clear the search box
			$(this).val(''); return false;
		});
	}

	/***
	 * addMarker(location, info, name)
	 *	This will add a marker to the map
	 *	 - location is where on the map
	 *	 - info is what shows up in the box when you click the marker
	 *	 - name is the name of the location
	 ***/
	function addMarker(location, info, yelp, name, title, type) {
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: title,
			type: type
		});

		var infoWindow = new google.maps.InfoWindow({
			content: info.join('')
		});

  	google.maps.event.addDomListener(marker, 'click', function() {
  		//Two 'if' statements to reset infoboxes and markers
  		if (currWindow) {
  			currWindow.close();
  		}

  		if (currMarker) {
  			currMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
  		}

  		//set the current infoWindow and Marker to this one if clicked.
  		currWindow = infoWindow;
  		currMarker = marker;
  		infoWindow.open(map, marker);

  		if (yelp) {
				getYelpInfo(yelp, name);
			}

			//on click, pan map to marker location, and set the new icon type.
			map.panTo(marker.position);
			marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
  	});

  	addListItem(title, name, marker, type);
	}

	/***
	 * getYelpInfo(query)
	 *	This will make an API call to yelp to get content back, to insert into
	 *	the marker InfoBox
	 ***/
	function getYelpInfo(query, name) {
		// This chunk of code comes from a GoogleGroups forum on using Yelp v2 API with JS
		// https://groups.google.com/forum/#!topic/yelp-developer-support/5bDrWXWJsqY
		// Yelp API is complicated: https://www.yelp.com/developers/documentation/v2/authentication
		var $yelpElem = $('#' + name);

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

    $.ajax({
			 url: message.action,
			 data: parameterMap,
			 dataType: 'jsonp',
			 cache: true
		}).success(function(data) {
			var busPhone = data.businesses[0].display_phone;
			var busRating = data.businesses[0].rating_img_url;

			//check to see if we already added the yelp stuff
			var exists = $('#' + data.businesses[0].id).length;
			if(exists < 1) {
				$yelpElem.append('<div class="infoyelplogo" id=' + data.businesses[0].id + '><img src="images/yelp_logo_75x38.png"></div>');
				$yelpElem.append('<p>Phone number: ' + busPhone + '</p>');
				$yelpElem.append('<p><img src="' + busRating + '">');
			}
		}).error(function(e) {
			console.log('an error has occured: likely with the YELP API key');
		});
	}

	/***
	 * addListItem(name, id)
	 * This will populate the list of results on the left side, and be clickable
	 * to allow invoking the infobox on the marker
	 ***/
	function addListItem(name, id, marker, type) {
		var item = '<li id="' + id + '-li" class="' + type + '">' + name + '</li>';
		$('#filtered-results').append(item);
		$('#' + id +'-li').click(function() {
			google.maps.event.trigger(marker, 'click');
		});
		availableItems.push(id);
	}

	/***
	 * setListStyle()
	 * Set a hover style for the list
	 ***/
	function setListStyle() {
		$('#filtered-results li').mouseover(function() {
			$(this).addClass('zebra-hover');
		});
		$('#filtered-results li').mouseout(function() {
			$(this).removeClass('zebra-hover');
		});
	}

	/***
	 * Do the good stuff here
	 *	//1: Setup the KnockoutJS model for the lists
	 *	//2: Call our initialize function
	 ***/
	ko.applyBindings(new filterModel());
	google.maps.event.addDomListener(window, 'load', initialize);
})();