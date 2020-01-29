
let map = L.map("map-layout").setView([-12.1724344, -77.01996919999999],13);

const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

L.tileLayer(tileURL).addTo(map);


userMarker = (coords) => {
	const marker = L.marker(coords)
	marker.bindPopup("Estas aqui!");
	map.addLayer(marker);
}


map.locate({enableHighAccuracy:true});
map.on("locationfound",(event) => {
	const coords = [event.latlng.lat,event.latlng.lng];
	userMarker(coords);
});