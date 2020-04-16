const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const findDocument = require("./findInterns");
const updateDocument = require("./updateInterns")

const url = "mongodb://localhost:27017/fosajeff";

const myMovies = [
  { movie: "The Banker", year: "2020", rating: 8 },
  { movie: "Bad Boys", year: "2020", rating: 7 },
  { movie: "The Hunt", year: "2020", rating: 7 },
  { movie: "Bloodshot", year: "2020", rating: 7.5 },
  { movie: "First Cow", year: "2020", rating: 6.5 }
];

// create colletion and insert documents
// MongoClient.connect(url, function(err, db) {
//   assert.equal(err, null);
//   my_db = db.db("fosajeff");
//   my_db.createCollection("myMovies", function(err, res) {
//     assert.equal(err, null);
//     my_db.collection("myMovies").insertMany(myMovies, function(err, res) {
//       assert.equal(err, null);
//       assert.equal(5, res.result.n);
//       assert.equal(5, res.ops.length);
//       console.log(res.result);
//       db.close();
//     });
//   });
// });

// find documents
// MongoClient.connect(url, function(err, db) {
//   findDocument(db, function(err, res) {
//     assert.equal(err, null)
//     console.log(res)
//     db.close()
//   })
// })

// update document
MongoClient.connect(url, function(err, db) {
  updateDocument(db, function(err, res) {
    assert.equal(err, null)
    console.log(res)
    db.close()
  })
})