const socket = io(); //Initial socket

let map = L.map("map-layout").setView([-12.1724344, -77.01996919999999],13);

let users = [];

//Get name user 
let namesUser = document.getElementById("userNames").value;
//Create event onClick
document.getElementById("btnSendUserData").onclick = () => saveNamesUser(namesUser);

const saveNamesUser  = (namesUser) => {
	if(namesUser.length >= 1){
			users.push(namesUser);
			alert("Save user success");
		}else{
			return alert("Names user is required");
	}
}

console.log("users->",users);

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
	console.log("coordsnoeLMariano->",coords);
	userMarker(coords,"noeLMariano","noeLMariano esta aqui!");
	socket.emit("userCoordinates",event.latlng);
});

//NEW USER COORS CREATE
socket.on("newUserCoordinates", coords => {
	const coords_ = [coords.lat, coords.lng];
	console.log("coordsInvitado->",coords_);
	userMarker(coords_,"Invitado","Invitado esta aqui!");
})
