import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';


/* This code is needed to properly load the images in the Leaflet CSS */


/* Instanciando mapa */
const map = L.map('map').setView([-34.488943, -58.507304], 12);
const defaultCenter = [-34.488943, -58.507304];
const defaultZoom = 15;
/* importo layer de mapa */
const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}');
/*, {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'}*/
basemap.addTo(map);
/* Defino vista y agrego cosas al mapa*/
map.setView(defaultCenter, defaultZoom);

/* Me encuentro en el mapa*/
map.locate({ enableHighAccuracy: true });
map.on('locationfound', e => {
  console.log('Ubicacion Permitida');
  var coords = [e.latlng.lat, e.latlng.lng];
  var markerC = L.marker([e.latlng.lat, e.latlng.lng], 13).addTo(map);
  console.log(coords);
  console.log(markerC);
  
  markerC.bindPopup('Tu estas AQUI!');
  map.addLayer(markerC);
  markerC.openPopup();
  /* socket.emit('userCoordinates', e.latlng);*/
  map.setView(coords, 14);

});

/* Agrego Marcadores estaticos adentro de la func DOMContentLoaded*/
document.addEventListener("DOMContentLoaded", function() {
  console.log('Documento CARGADO DOMContentLoaded')
const markerD = L.marker([-34.4525997, -58.5107401], 13);
markerD.addTo(map);

var location = [-34.4550997, -58.5105001];
var markerA = L.marker(location)
markerA.bindPopup('PRUEBA');
markerA.addTo(map);
markerA.openPopup();

var myIcon = L.icon({
  iconUrl: '../../marker.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
var markerB = L.marker([-34.4525997, -58.5107401], { icon: myIcon }).addTo(map);
map.addLayer(markerB);
markerB.openPopup();
});





/* Funcionalidades de mi mapa */

map.on('click', onMapClick);
function onMapClick(e) {
  var coords = [e.latlng.lat, e.latlng.lng];
  console.log(coords);
  console.log('click!!');
  var marker = new L.Marker([e.latlng.lat, e.latlng.lng]);
  marker.addTo(map);
  marker.bindPopup('AGREGADO!');
  marker.openPopup();
  map.addLayer(marker);

}


