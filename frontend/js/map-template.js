import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
/* This code is needed to properly load the images in the Leaflet CSS */

const map = L.map('map').setView([-34.488943, -58.507304], 12);
/* Me encuentro en el mapa*/
map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    var coords = [e.latlng.lat, e.latlng.lng];
    var marker = L.marker(coords);
    marker.bindPopup('Tu estas AQUI!');
    map.addLayer(marker);
        /*socket.emit('userCoordinates', e.latlng);*/
        map.setView(coords, 14);
});

const defaultCenter = [-34.488943, -58.507304];
const defaultZoom = 15;
/* importo layer de mapa */
const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
/* Agrego Marcadores estaticos */
const marker1 = L.marker([-34.4725997,-58.5107401],13).addTo(map);
const marker3 = L.marker([-34.4525997,-58.5107401],13);

/* Defino vista y agrego cosas al mapa*/
map.setView(defaultCenter, defaultZoom);
marker3.addTo(map);
basemap.addTo(map);

/* Funcionalidades de mi mapa */


