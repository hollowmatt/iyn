function getMapData() {
  var mapData = {
    "cities": [
      {
        "Name": "New York, NY",
        "lat": "40.73384312330757",
        "lon": "-73.99001970728763",
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
        "Name": "Mountain View, CA",
        "lat": "37.3860517",
        "lon": "-122.0838511",
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
        "lat": "40.73384312330757",
        "lon": "-73.99001970728763",
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
      }
    ]
  }
  return mapData;
}

function getMapFilters() {
  var filters = { "1": "All", "2": "Restaurants", "3": "Bars" };
  return filters;
}