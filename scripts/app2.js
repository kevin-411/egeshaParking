var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(-1.097,37.01421),
        L.latLng(-1.09512,37.01453)
    ],
    routeWhileDragging: true
}).addTo(map);