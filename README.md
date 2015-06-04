# iyn
IYN: In Your Neighborhood

## Using the app:
You will need to add your YELP API information into the iyn.js file in order to get the YELP API calls to work:
```javascript
//Removed keys
var auth = {
  consumerKey: "<consumerKey>",
  consumerSecret: "<consumerSecret>",
  accessToken: "<accessToken>",
  accessTokenSecret: "<accessTokenSecret>",
  serviceProvider: {
    signatureMethod: "HMAC-SHA1"
  }
};
```

The site will render with a top navbar (this has a city selector in it, along with a right aligned title).  On the left, below the navbar, is the list of markers (which are also on the map).  Hover over them, they will light up, and clicking will activate the marker on the map (just like clicking the marker).

Above the left hand links, we have a search box.  This will autocomplete with the contents of the list below as you type.  Selecting the value will activate the marker on the map.


## Sites Used for Reference
 - https://developers.google.com/maps/tutorials/customizing/
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/pirates/
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/places/autocomplete-hotel-search.html
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/sidebar/random-markers.html
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/infowindow_custom/infowindow-custom.html
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/fusiontables/cycletrails.html
 - http://gmaps-samples-v3.googlecode.com/svn/trunk/places/place-icons.html
 - http://www.morethanamap.com/
 - https://developers.google.com/maps/documentation/javascript/examples/

## API links and info
 - https://www.yelp.com/developers
 - https://www.yelp.com/developers/api_console
 - https://jqueryui.com/autocomplete/