var map = L.map('map').setView([38.1, -99], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var padresIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/San_Diego_Padres_cap_logo.svg/2048px-San_Diego_Padres_cap_logo.svg.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    className: 'Padres Stadium'
})

var padres = L.marker([32.7076, -117.1570], {icon:padresIcon}, {title: "Padres Stadium"}).addTo(map);
var giants = L.marker([37.7784, -122.3892]).addTo(map);
var redSox = L.marker([42.3467, -71.0972]).addTo(map);
var yankees = L.marker([40.8296, -73.9262]).addTo(map);
var brewers = L.marker([43.0282, -87.9713]).addTo(map);
var angels = L.marker([33.7998, -117.8824]).addTo(map);
var cardinals = L.marker([38.6226, -90.1928]).addTo(map);
var diamondbacks = L.marker([33.4453, -112.0667]).addTo(map);
var phillies = L.marker([39.9061, -75.1665]).addTo(map);
var mets = L.marker([40.7571, -73.8458]).addTo(map);
var tigers = L.marker([42.3390, -83.0485]).addTo(map);
var rockies = L.marker([39.7561, -104.9942]).addTo(map);
var dodgers = L.marker([34.0739, -118.2400]).addTo(map);
var rangers = L.marker([32.7469, -97.0832]).addTo(map);
var reds = L.marker([39.0974, -84.5071]).addTo(map);
var whiteSox = L.marker([41.8299, -87.6337]).addTo(map);
var royals = L.marker([39.0517, -94.4803]).addTo(map);
var marlins = L.marker([25.7781, -80.2196]).addTo(map);
var astros = L.marker([29.7572, -95.3552]).addTo(map);
var nationals = L.marker([38.8730, -77.0074]).addTo(map);
var athletics = L.marker([37.7514, -122.2009]).addTo(map);
var orioles = L.marker([39.2838, -76.6217]).addTo(map);
var pirates = L.marker([40.4475, -80.0072]).addTo(map);
var guardians = L.marker([41.4959, -81.6853]).addTo(map);
var blueJays = L.marker([43.6416, -79.3894]).addTo(map);
var mariners = L.marker([47.5915, -122.3326], {title: 'Mariners Stadium'}).addTo(map);
var twins = L.marker([44.9817, -93.2776]).addTo(map);
var rays = L.marker([27.7682, -82.6534]).addTo(map);
var braves = L.marker([33.8911, -84.4684]).addTo(map);
var cubs = L.marker([41.9484, -87.6553], {title: 'Cubs Stadium'}).addTo(map);

console.log(mariners.options.title);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.title)
        .openOn(map);

    console.log(e.options.title);
    
}

map.on('click', onMapClick);
