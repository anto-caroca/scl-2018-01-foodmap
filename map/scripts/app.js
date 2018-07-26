var mapContainer = document.getElementById('map-container');

var platform = new H.service.Platform({
  app_id: 'YTwDUxFfBXp7TI2GimXS', // // <-- ENTER YOUR APP ID HERE
  app_code: 'qlKZLMttFtDmjErf3WAolA', // <-- ENTER YOUR APP CODE HERE
  // Only necessary if served over HTTPS:
  // useHTTPS: true
});

var HEREHQcoordinates = {
  lat: -33.4167, // HERE HQ in Recoleta - SANTIAGO, Chile
  lng: -70.65
};

// Displaying the map
var mapOptions = {
  center: HEREHQcoordinates,
  zoom: 14
};

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);

// Resize the map when the window is resized
window.addEventListener('resize', function () {
  map.getViewPort().resize();
});

// Basic behavior: Zooming and panning
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Marker with custom icon
var iconUrl = './images/restaurant.svg';

var iconOptions = {
  size: new H.math.Size(26, 34),
  anchor: new H.math.Point(14, 34)
};

var markerOptions = {
   icon: new H.map.Icon(iconUrl, iconOptions)
};

var marker = new H.map.Marker(HEREHQcoordinates, markerOptions);
map.addObject(marker);