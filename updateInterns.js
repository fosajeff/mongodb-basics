const assert = require("assert");

const updateDocument = function(db, callback) {
  let my_db = db.db("fosajeff");
  my_db
    .collection("myMovies")
    .updateOne(
      { movie: "The Banker" },
      { $set: { movie: "Money Heist", year: '2017', rating: 8.5 } },
      function(err, res) {
        assert.equal(err, null);
        assert.equal(1, res.result.nModified);
        console.log(`${res.result.nModified} document updated`);
      }
    );
  my_db
    .collection("myMovies")
    .find()
    .toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Updated collection");
      callback(null, docs);
    });
};

module.exports = updateDocument;
