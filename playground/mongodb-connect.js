// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err, db) => {
    if(err){
       return console.log("Unable to connect to MongoDb server");
    }
    console.log("connected to MongoDb server");

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection("Users").insertOne({
    //     name: "James",
    //     age: 20,
    //     location: "Toronto"
    // }, (err, result) => {
    //     if(err){
    //         return console.log("unable to insert user", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});