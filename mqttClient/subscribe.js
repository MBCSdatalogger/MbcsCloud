const { privateEncrypt } = require('crypto');
var fs = require('fs');
var mqtt = require('mqtt');
var caFile = fs.readFileSync("./");
var certFile = fs.readFileSync("myCertFile");
var keyFile = fs.readFileSync("myKeyFile");
                                         /**Define Broker Details */
const options = {
    rejectUnauthorized: false,
    //clientId: '2418636c',
    username: 'mqtt',
    password: 'mqtt',
    clean: true,
    connectTimeout: 5000,
    QoS: 1,
    // ca: [],
    // cert: certFile,
    // key: keyFile
}

const url = 'mqtt://172.20.16.105';
const topicname = 'MySite';

if(!port){
  do{
    port == url;
  }while(
    port!= url
  ){
    ca = caFile;
    cert = myCertFile;
    keyFile = myKeyFile
  }
}else{
  console.log("port Not Found");
}

var encryptedPayload;
client.on(
  message.JSON = Response(payload),
   encryptedPayload = privateEncrypt(payload).copy(payload, 1),
)

var encrypedMessage = () => {
  return(encryptedPayload.keyFile.fs());

}



                                        /**Url of the broker path and Topic Name */

// const url = 'mqtt://public.mqtthq.com';


                                        /** Establish Connection with Client */
const client  = mqtt.connect(url,options)
client.on('connect', function () {
  console.log('Connected')
  client.subscribe(topicname, function (err) {
    if (!err) {
       //client.publish(topicname, 'Feedback Ack')
     }
   })
 })
 var data_mb;
 var obj;
                                        /**Read message From the Topic */
client.on('message', function (topicname, message) {

                                        /**Stringify Message */

  data_mb = message.toString();
  obj = JSON.parse(data_mb);
  console.log(obj);

  var socket = io;
  socket.on('connect', function(){
    console.log('Connected to Server')
   
  });

  socket.on('sendmessage', (data_mb)=>{
    console.log('newMessage', data_mb);
  })
  //client.end()
})

const encodedData = new encrypedMessage((item) =>{
  Object.entries(encryptedPayload).map((newitem) =>
  {
    key1: newitem[0];
    val1: newitem[1];
    key2: newitem[2];
    val2: newitem[3];
  })
})

client.on('getmessage', (encodedData) =>{
  console.log(encodedData)
})






module.exports = data_mb;