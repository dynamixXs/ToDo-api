// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err, db) => {
    if(err){
       return console.log("Unable to connect to MongoDb server");
    }
    console.log("connected to MongoDb server");

    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
        console.log(result);
    });

    // db.close();
});