// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/todoApp", (err, db) => {
    if(err){
       return console.log("Unable to connect to MongoDb server");
    }
    console.log("connected to MongoDb server");

    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5b706acdaebba5445b24533d")
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b6a803d13d5e952a9985911")
    }, {
        $set: {
            name: "Jimmy"
        },

        $inc:{
            age: 1
        }
    },
    {returnOriginal: false
    }).then((result) => {
        console.log(result)
    });
    
});