const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/fosajeff";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const my_db = db.db("fosajeff");
  console.log(`Database created by ${my_db.databaseName}`);
  db.close();
});
