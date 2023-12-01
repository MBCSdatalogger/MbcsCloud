
const express = require('express'); 
const socketIO = require('socket.io');
const http = require('http') 
const port = process.env.PORT||3000 
let app = express();
let server = http.createServer(app)
let io = socketIO(server)
 
 
server.listen(port);