
const { MongoClient } = require('mongodb');
const data_mb = require('../mqttClient/subscribe');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mbTest';

async function main() {
  await client.connect();
  console.log('Database Connected');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());