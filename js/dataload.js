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
            "title": "8th St. Wine Cellar",
            "name": "WineCellar",
            "lat": "40.73268976628568",
            "lon": "-73.997558131814",
            "content": ["<div class='infobox' id='WineCellar'><div class='infotitle'><span>8th Street Wine Cellar</span></div>",
                        "<img src='http://8thstwinecellar.com/webpages/images/photos_bar.gif' class='infoimage'>",
                        "<div class='infobody'><p>Wine Cellar isn't the place where you can drink under the table",
                        ", because you're already under the floor.</p></div>",
                        "<div class='infourl'><a href='http://8thstwinecellar.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=8th street wine cellar&location=New York, NY&limit=1"
          },
          {
            "type": "Restaurant",
            "title": "Peacefood",
            "name": "Peacefood",
            "lat": "40.73296618251578",
            "lon": "-73.99279452860355",
            "content": ["<div class='infobox' id='Peacefood'><div class='infotitle'><span>Peacefood Cafe</span></div>",
                        "<img src='http://www.peacefoodcafe.com/wp/wp-content/themes/peacefoodcafe/images/nav_logo.png' class='infoimage'>",
                        "<div class='infobody'><p>A vegan kitchen and bakery</p></div>",
                        "<div class='infourl'><a href='http://www.peacefoodcafe.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Peacefood&location=New York, NY&limit=1"
          },
          {
            "type": "Restaurant",
            "title": "Blossom du Jour",
            "name": "Blossom",
            "lat": "40.76097582376582",
            "lon": "-73.99082377552986",
            "content": ["<div class='infobox' id='Blossom'><div class='infotitle'><span>Blossom Du Jour</span></div>",
                        "<img src='http://www.blossomdujour.com/bdj-logo.png' class='infoimage'>",
                        "<div class='infobody'><p>Vegan Fast Food - as healthy as you want to be</p></div>",
                        "<div class='infourl'><a href='http://www.blossomdujour.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Blossom du jour&location=times square New York, NY&limit=1"
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
            "title": "Tied House",
            "name": "TiedHouse",
            "lat": "37.394575342727734",
            "lon": "-122.08069235086441",
            "content": ["<div class='infobox' id='TiedHouse'><div class='infotitle'><span>Tied House Cafe and Brewery</span></div>",
                        "<img src='http://tiedhouse.com/wp-content/uploads/2012/04/Headerbar19871.jpg' class='infoimage'>",
                        "<div class='infobody'><p>The South Bay's original microbrewery</p></div>",
                        "<div class='infourl'><a href='http://tiedhouse.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=tied house&location=mountain view, ca&limit=1"
          },
          {
            "type": "Bar",
            "title": "Steins Beer Garden",
            "name": "Steins",
            "lat": "37.39407883199609",
            "lon": "-122.07989037036896",
            "content": ["<div class='infobox' id='Steins'><div class='infotitle'><span>Steins Beer Garden</span></div>",
                        "<img src='http://steinsbeergarden.com/steinsfour/wp-content/uploads/2014/09/steins-cap.png' class='infoimage'>",
                        "<div class='infobody'><p>A modern American take on the classic German biergarten</p></div>",
                        "<div class='infourl'><a href='http://steinsbeergarden.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Steins Beer Garden&location=mountain view, ca&limit=1"
          },
          {
            "type": "Restaurant",
            "title": "Starbucks",
            "name": "Starbucks",
            "lat": "37.38754504105412",
            "lon": "-122.08302319049835",
            "content": ["<div class='infobox' id='Starbucks'><div class='infotitle'><span>Starbucks Coffee Company</span></div>",
                        "<img src='http://www.starbucks.com/static/images/global/logo.svg' class='infoimage'>",
                        "<div class='infobody'><p>Share great coffee with your friends and help make the world a little better.</p></div>",
                        "<div class='infourl'><a href='http://www.starbucks.com/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Starbucks&location=mountain view, ca&limit=1"
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
            "title": "Kaya Restaurant",
            "name": "Kaya",
            "lat": "40.45109460901854",
            "lon": "-79.98545363545418",
            "content": ["<div class='infobox' id='Kaya'><div class='infotitle'><span>Kaya Restaurant</span></div>",
                        "<img src='http://www.bigburrito.com/kaya/i/structure/logo_f2.gif' class='infoimage'>",
                        "<div class='infobody'><p>West Indies food sensation - vegan friendly</p></div>",
                        "<div class='infourl'><a href='http://www.bigburrito.com/kaya/'>visit</a></div></div>"],
            "yelp": "http://api.yelp.com/v2/search/?term=Kaya Restaurant&location=Pittsburgh, PA&limit=1"

          },
          {
            "type": "Bar",
            "title": "Tonic Bar and Grill",
            "name": "Tonic",
            "lat": "40.44369742276764",
            "lon": "-79.99541569501162",
            "content": ["<div class='infobox' id='Tonic'><div class='infotitle'><span>Tonic Bar and Grill</span></div>",
                        "<img src='http://www.tonicpittsburgh.com/images/gallery%20images-13100x77.jpg' class='infoimage'>",
                        "<div class='infobody'><p>Traditional bar and grill with a 'Tonic Twist'</p></div>",
                        "<div class='infourl'><a href='http://www.tonicpittsburgh.com'>visit</a></div></div>"],
            "yelp" : "http://api.yelp.com/v2/search/?term=tonic bar and grill&location=pittsburgh, pa&limit=1"
          },
          {
            "type": "Restaurant",
            "title": "The Zenith",
            "name": "Zenith",
            "lat": "40.426466824353994",
            "lon": "-79.96901705861092",
            "content": ["<div class='infobox' id='Zenith'><div class='infotitle'><span>The Zenith</span></div>",
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