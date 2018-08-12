// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err, db) => {
    if(err){
       return console.log("Unable to connect to MongoDb server");
    }
    console.log("connected to MongoDb server");

    // db.collection("Todos").find({
    //     _id: new ObjectID("5b6a7e4817f6657d99f4f71c")
    
    //     }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // })

    db.collection("Todos").find({}).toArray().then((count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    })


    db.close();
});