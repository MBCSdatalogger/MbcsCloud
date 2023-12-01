/**
 * Import express framework for create Node Application.
 * Import File Structure i.e. fs for synchronize file.
 * Install and import mongoose for Database operations.
 * http for http protocol and cors foe wrap/secure data.
 * Install and import mqtt for establish connection with mosquitto broker.
 *  
 */

var { readFileSync } = require('fs');
var mqtt = require('mqtt');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
var cors = require('cors');
var { Devicem } = require('./models/devicem.js');
var mongoose = require('mongoose');

        /** Key file to configure TLS */

//var caFile = readFileSync('./backend/sslcerts/server.crt');
var certFile = readFileSync('./sslcerts/cacert.crt');
//var keyFile = fs.readFileSync('./backend/sslcerts/cakey.key');

        /**Define Broker Details */

const options = {
  //clientId: ('clientmbcsiedoo'),
  username: 'mqtt',
  password: 'mqtt',
  port: 8883,
  connectTimeout: 5000,
  QoS: 0,
  ca: [certFile],
  // cert: caFile,
  // key: keyFile
  useSSL: false,
  protocolVersion: 5,
  rejectUnauthorized: false,
  clean: true,
}

        /**Url of the broker path and Topic Name */
const urlList = [
  openSSL_ip = 'mqtts://172.20.16.105',
  withoutSSL_ip = 'mqtt://192.168.100.230',
  ssl_AWS_ip = 'mqtts://13.234.238.159'
]

const topicList = [
  topic1 = 'Topic',
  topic2 = 'Mysite'
]



const url = 'mqtts://172.20.16.105';
const topicname = 'Topic';

        /**Establish Connection with Client */

const client = mqtt.connect(url, options)
client.on('connect', function () {
  console.log('Mqtt Client Connected');
  client.subscribe(topicname, function (err) {
    if (!err) {
      // client.publish(topicname, 'Hello SSL');
    }
  })

})

        /** Variable data_mb for recieved data from MQTT payload */

var data_mb;
var data_mbcs_get;
var obj;
const MONGO_URL = "mongodb://localhost:27017";

/**Read message From the Topic */

client.on('message', function (topicname, message) {

       /**Stringify Message */

  data_mb = message.toString();
  console.log(data_mb);

       /**Parse data_mb to json object*/

  obj = JSON.parse(data_mb);
  //console.log(obj);

       /**Conquer JSON */

  var keys = Object.keys(obj);
  var values = Object.values(obj);
  var keylength = keys.length;

       /**   Add DID to Inner Object and convert to single Device Data */

  for (var loop = 0; loop <= keylength - 1; loop++) {
    values[loop].DID = keys[loop];
    data_mbcs_get = values[loop];
    console.log(values[loop]);
  }

        /**   Connect mongoose insert Data to MongoDB    */

  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      Devicem.insertMany(values);
    })
    .catch((error) => console.log('did not connect'));
})

        /**Create http server */

var app = express()
app.use(cors())

const port = 8080
let server = http.createServer(app);
server.listen(port);

app.get('/Devicem', function (req, res, next) {
  res.send(data_mbcs_get);
})











