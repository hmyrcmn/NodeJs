const { MongoClient, ServerApiVersion } = require('mongodb');
const databaseName = "task-manager"
const uri = "mongodb+srv://edaadurall:lVCQ7dAoo61E20VR@nodejs.aztavxa.mongodb.net/?retryWrites=true&w=majority&appName=NodeJs";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const db = client.db(databaseName)
        db.collection("users").insertOne({
            name: "Eda",
            age: 23
        })

    } finally {
        await client.close();
    }
}
run().catch(console.dir);