var MongoClient = require('mongodb').MongoClient;
var data = "mongodb://localhost:27017/database";

MongoClient.connect(data, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
