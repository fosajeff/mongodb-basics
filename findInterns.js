const assert = require("assert");

const findDocument = function(db, callback) {
  let my_db = db.db("fosajeff");

  // query first document
  my_db.collection("myMovies").findOne({}, function(err, doc) {
    assert.equal(err, null);
    console.log("Found the first document");
    callback(null, doc);
  });

  // query rating: 7
  my_db
    .collection("myMovies")
    .find({ rating: 7 })
    .toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the documents with rating of 7");
      callback(null, docs);
    });

  // query with projection
  my_db
    .collection("myMovies")
    .find({}, { projection: { _id: 0, movie: 1 } })
    .toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Applying projections");
      callback(null, docs);
    });
};

module.exports = findDocument;
