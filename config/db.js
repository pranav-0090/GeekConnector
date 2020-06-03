const mongoose = require('mongodb').MongoClient;
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {

    // code given by MongoDB
    /*const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://pranav0090:Mongo0090@awsdevcluster-3lsbr.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        console.log("MongoDB Connected...");
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    });*/

    const uri = "mongodb+srv://pranav0090:Mongo0090@awsdevcluster-3lsbr.mongodb.net/test?retryWrites=true&w=majority";

    const client = new mongoose(db, { useUnifiedTopology: true, useNewUrlParser: true });
    try {
        await client.connect().then(() => console.log("MongoDB Connected"));
        //await gives promise to wait for connect db first

        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Error Not Connected... err: " + err.message);

        //exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB; //for calling module from other file
