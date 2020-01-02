const map = L.map('map-template').setView([-34.488943, -58.507304], 12);

const socket = io();

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);



map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {
    coords = [e.latlng.lat, e.latlng.lng];
    marker = L.marker(coords);
    marker.bindPopup('Tu estas AQUI!');
    map.addLayer(marker);
        socket.emit('userCoordinates', e.latlng);
        map.setView(coords, 14);
});

const marker = L.marker([-34.4925997,-58.5107401],13);
//marker.bindPopup('Hola alla arriba');
//map.addLayer(marker);
