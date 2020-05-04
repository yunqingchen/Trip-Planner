const mapbox = require("mapbox-gl");
const buildMarker = require("./marker");


mapbox.accessToken = "pk.eyJ1IjoidmxhZGlzODI4IiwiYSI6ImNrOXNwYzlyMTE3dzMzbnFzb2lvbWR0ZHMifQ.AtvPeYOmwxTHRQkl_s7jog";

const map = new mapbox.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDiv = document.createElement("div");
markerDiv.style.width = "32px";
markerDiv.style.height = "39px";
markerDiv.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapbox.Marker(markerDiv).setLngLat([-74.009, 40.705]).addTo(map);


const marker = buildMarker("hotels", [-75, 41]); // or [-87.6354, 41.8885]
console.log(marker);
marker.addTo(map);
