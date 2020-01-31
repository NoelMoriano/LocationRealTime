module.exports = io => {
	io.on("connection", (socket) =>  {
		
		socket.on("userCoordinates", coords => {
			socket.broadcast.emit("newUserCoordinates",coords); //Transmitir un msm a todos los usuarios
		})  

	});
}