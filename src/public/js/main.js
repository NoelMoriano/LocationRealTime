const socket = io(); //Initial socket

let map = L.map("map-layout").setView([-12.1724344, -77.01996919999999],13);

const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

L.tileLayer(tileURL).addTo(map);

//FUNCTION CREATE MARKET
userMarker = (arrayCoords,messagePopUp,messageTooltip) => {
	const marker = L.marker(arrayCoords)
	marker.bindPopup(messagePopUp).openPopup(map);
	marker.bindTooltip(messageTooltip).openTooltip();
	map.addLayer(marker);
}

//OBTENIENDO COORDENADAS
map.locate({enableHighAccuracy:true});

map.on("locationfound",(event) => {
	const coords = [event.latlng.lat,event.latlng.lng];
	console.log("coordsUserOne->",coords);
	userMarker(coords,"noeLMariano","noeLMariano esta aqui!");
	socket.emit("userCoordinates",event.latlng);
});

//NEW USER COORS CREATE
socket.on("newUserCoordinates", coords => {
	const coords_ = [coords.lat, coords.lng];
	console.log("coordsUserTwo->",coords_);
	userMarker(coords_,"Roberto","Roberto esta aqui!");
})
