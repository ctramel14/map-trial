var map = L.map('map').setView([38.1, -99], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var visited = L.icon({
    iconUrl: 'https://e7.pngegg.com/pngimages/270/706/png-clipart-check-mark-computer-icons-green-tick-mark-angle-text.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    className: 'visited',
})




// var padres = L.marker([32.7076, -117.1570], {icon:visited}, {title: "Visited"}).addTo(map) .bindPopup('Welcome to Petco Park!') ;
var giants = L.marker([37.7784, -122.3892]).addTo(map) .bindPopup('Welcome to Oracle Park!');
var redSox = L.marker([42.3467, -71.0972]).addTo(map) .bindPopup('Welcome to Fenway Park!');
var yankees = L.marker([40.8296, -73.9262]).addTo(map) .bindPopup('Welcome to Yankee Stadium!');;
var brewers = L.marker([43.0282, -87.9713]).addTo(map) .bindPopup('Welcome to American Family Field!');
var angels = L.marker([33.7998, -117.8824]).addTo(map) .bindPopup('Welcome to Angel Stadium!');
var cardinals = L.marker([38.6226, -90.1928]).addTo(map) .bindPopup('Welcome to Busch Stadium!');
var diamondbacks = L.marker([33.4453, -112.0667]).addTo(map) .bindPopup('Welcome to Chase Field!');;
var phillies = L.marker([39.9061, -75.1665]).addTo(map) .bindPopup('Welcome to Citizens Bank Park!');
var mets = L.marker([40.7571, -73.8458]).addTo(map) .bindPopup('Welcome to Citi Field!');
var tigers = L.marker([42.3390, -83.0485]).addTo(map) .bindPopup('Welcome to Comerica Park!');
var rockies = L.marker([39.7561, -104.9942]).addTo(map) .bindPopup('Welcome to Coors Field!');
var dodgers = L.marker([34.0739, -118.2400]).addTo(map) .bindPopup('Welcome to Globe Life Field!');
var reds = L.marker([39.0974, -84.5071]).addTo(map) .bindPopup('Welcome to the Great American Ball Park!');
var whiteSox = L.marker([41.8299, -87.6337]).addTo(map) .bindPopup('Welcome to Guaranteed Rate Field!');
var royals = L.marker([39.0517, -94.4803]).addTo(map) .bindPopup('Welcome to Kaufmann Stadium!');
var marlins = L.marker([25.7781, -80.2196]).addTo(map) .bindPopup('Welcome to LoanDepot Park!');
var astros = L.marker([29.7572, -95.3552]).addTo(map) .bindPopup('Welcome to Minute Maid Park!');
var nationals = L.marker([38.8730, -77.0074]).addTo(map) .bindPopup('Welcome to Nationals Park!');
var athletics = L.marker([37.7514, -122.2009]).addTo(map) .bindPopup('Welcome to the Oakland-Alameda County Coliseum!');
var orioles = L.marker([39.2838, -76.6217]).addTo(map) .bindPopup('Welcome to Oriole Park at Camden Yards!');
var pirates = L.marker([40.4475, -80.0072]).addTo(map) .bindPopup('Welcome to PNC Park!');
var guardians = L.marker([41.4959, -81.6853]).addTo(map) .bindPopup('Welcome to Progressive Park!');
var blueJays = L.marker([43.6416, -79.3894]).addTo(map) .bindPopup('Welcome to Rogers Centre!');
var mariners = L.marker([47.5915, -122.3326], {title: 'Mariners Stadium'}).addTo(map) .bindPopup('Welcome to T-Mobile Park!');
var twins = L.marker([44.9817, -93.2776]).addTo(map) .bindPopup('Welcome to Target Field!');
var rays = L.marker([27.7682, -82.6534]).addTo(map) .bindPopup('Welcome to Tropicana Field!');
var braves = L.marker([33.8911, -84.4684]).addTo(map) .bindPopup('Welcome to Truist Park!');
var cubs = L.marker([41.9484, -87.6553], {title: 'Cubs Stadium'}).addTo(map) .bindPopup('Welcome to Wrigley Field!');

// console.log(cubs);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

    console.log(e);
    
}

function onMapDoubleClick(e) {
    marker
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

    console.log(e);
    
}

var tooltip = L.tooltip()

// function onMouseOver(e) {
//     tooltip
//     .setLatLng(e.latlng)
//     .setContent('Hello world!<br />This is a nice tooltip.')
//     .openOn(astros);
    
// }


map.on('click', onMapClick);
map.on('dblclick', onMapDoubleClick)
// map.on('mouseover', onMouseOver)
