import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';


/* This code is needed to properly load the images in the Leaflet CSS */

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
/* Instanciando mapa */
const map = L.map('map').setView([-34.488943, -58.507304], 12);
const defaultCenter = [-34.488943, -58.507304];
const defaultZoom = 15;
/* importo layer de mapa */
const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
basemap.addTo(map);
/* Defino vista y agrego cosas al mapa*/
map.setView(defaultCenter, defaultZoom);

/* Me encuentro en el mapa*/
map.locate({ enableHighAccuracy: true });
map.on('locationfound', e => {
  console.log('Ubicacion Permitida');
  var coords = [e.latlng.lat, e.latlng.lng];
  var marker = L.marker(coords);
  console.log(coords);
  console.log(marker);

  marker.bindPopup('Tu estas AQUI!');
  map.addLayer(marker);
  /* socket.emit('userCoordinates', e.latlng);*/
  map.setView(coords, 14);
  L.marker([-34.4525997, -58.5107401], 13).addTo(this.map);
});

/* Agrego Marcadores estaticos */



map.on('click', onMapClick);
function onMapClick(e) {
  var coords = [e.latlng.lat, e.latlng.lng];
  console.log(coords);
  console.log('click!!');
  var marker = new L.Marker([e.latlng.lat, e.latlng.lng]);
  marker.addTo(map);
}





/* Funcionalidades de mi mapa */

