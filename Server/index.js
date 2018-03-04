//Initialize Dependencies
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 3000;

//Start server
server.listen(port, function(){
	console.log('Server listening at port %s', port);
});


//Server send HTML file to client
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//Action that happens when a client is connected to the server
io.on('connection', function(client){
	console.log('Client connected...');
	client.on('disconnect', function(){
		console.log('Client disconnected...');
	});
	//Receive data from Android App
	client.on('pushData', function(data){
		console.log(data);
	});
	//Send data to Drone
		//INSERT DRONE STUFF HERE
});
