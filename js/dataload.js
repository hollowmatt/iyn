function getMapData() {
  var mapData = {
    "cities": [
      {
        "Name": "New York, NY",
        "lat": "40.73384312330757",
        "lon": "-73.99001970728763",
        "zoom": 13,
        "places" :[
          {
            "type": "Bar",
            "name": "8th St. Wine Cellar",
            "lat": "40.73268976628568",
            "lon": "-73.997558131814",
            "content": "A great place for wine"
          },
          {
            "type": "Restaurant",
            "name": "Peacefood",
            "lat": "40.73296618251578",
            "lon": "-73.99279452860355",
            "content": "Amazing Vegan food!"
          },
          {
            "type": "Restaurant",
            "name": "Blossom du Jour",
            "lat": "40.76097582376582",
            "lon": "-73.99082377552986",
            "content": "Great fast vegan take-out"
          }
        ]
      },
      {
        "Name": "Mountain View, CA",
        "lat": "37.3860517",
        "lon": "-122.0838511",
        "zoom": 15,
        "places" :[
          {
            "type": "Bar",
            "name": "Tied House",
            "lat": "37.394575342727734",
            "lon": "-122.08069235086441",
            "content": "Makes great beer"
          },
          {
            "type": "Bar",
            "name": "Steins Beer Garden",
            "lat": "37.39407883199609",
            "lon": "-122.07989037036896",
            "content": "Makes great beer"
          },
          {
            "type": "Restaurant",
            "name": "Starbucks",
            "lat": "37.38754504105412",
            "lon": "-122.08302319049835",
            "content": "Makes great coffee"
          }
        ]
      },
      {
        "Name": "Pittsburgh, PA",
        "lat": "40.441476475059055",
        "lon": "-79.99926902353764",
        "zoom": 14,
          "places" :[
          {
            "type": "Restaurant",
            "name": "Kaya",
            "lat": "40.45109460901854",
            "lon": "-79.98545363545418",
            "content": ["<div class='infobox'><div class='infotitle'><span>Kaya Restaurant</span></div>",
                        "<img src='http://www.bigburrito.com/kaya/i/structure/logo_f2.gif' class='infoimage'>",
                        "<div class='infobody'><p>West Indies food sensation - vegan friendly</p></div>",
                        "<div class='infourl'><a href='http://www.bigburrito.com/kaya/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Kaya Restaurant&location=Pittsburgh, PA&limit=1"

          },
          {
            "type": "Bar",
            "name": "Tonic",
            "lat": "40.44369742276764",
            "lon": "-79.99541569501162",
            "content": ["<div class='infobox'><div class='infotitle'><span>Tonic Bar and Grill</span></div>",
                        "<img src='http://www.tonicpittsburgh.com/images/gallery%20images-13100x77.jpg' class='infoimage'>",
                        "<div class='infobody'><p>Traditional bar and grill with a 'Tonic Twist'</p></div>",
                        "<div class='infourl'><a href='http://www.tonicpittsburgh.com'>visit</a></div></div>"],
            "yelp" : "http://api.yelp.com/v2/search/?term=tonic bar and grill&location=pittsburgh, pa&limit=1"
          },
          {
            "type": "Restaurant",
            "name": "Zenith",
            "lat": "40.426466824353994",
            "lon": "-79.96901705861092",
            "content": ["<div class='infobox'><div class='infotitle'><span>The Zenith</span></div>",
                        "<img src='http://zenithpgh.com/wordpress/wp-content/uploads/2011/09/logo1.jpg' class='infoimage'>",
                        "<div class='infobody'><p>Vegitarian Cafe * Art Gallery * Antique Goldmine</p></div>",
                        "<div class='infourl'><a href='http://zenithpgh.com'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=the zenith&location=pittsburgh, pa&limit=1"
          }
        ]
      }
    ]
  }
  return mapData;
}

function getMapFilters() {
  var filters = { "1": "All", "2": "Restaurants", "3": "Bars" };
  return filters;
}