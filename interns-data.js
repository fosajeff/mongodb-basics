const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/fosajeff';
 
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const my_db = db.db("fosajeff");
    my_db.createCollection("interns", (err, res) => {
        if (err) throw err;
        console.log("Interns collection created")
        db.close();
    })

});

