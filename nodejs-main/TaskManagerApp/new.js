const mongodb = require("mongodb");

// MongoDB client
const { MongoClient } = mongodb;

// Bağlantı URL'si
const connectionURL =
  "mongodb+srv://hmyrcmn:Humeyra.106@hmyrcmn.urli8wf.mongodb.net/?retryWrites=true&w=majority&appName=hmyrcmn";

const databaseName = "task-manage";

// Veritabanına bağlanma: connection to database
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      console.log("Veritabanı bağlantısı kurulamadı: ", error);
    } else {
      console.log("Veritabanına bağlanıldı");
    }
  }
);

try {
  //const result = await usersCollection.findOne({name: 'Cana'});
  const result = await usersCollection.findOne({ name: "Can", age: 99 });
  if (!result) console.log("Could not find user");
  else console.log("Found user: ", JSON.stringify(result));
} catch (err) {
  console.error("Something went wrong in find: ", err);
} finally {
  await client.close();
  console.error("Connection closing");
}

tasks = [
  { description: "Clean the house", completed: true },
  { description: "Water plants", completed: false },
  { description: "See the docto", completed: false },
];
try {
  const result = await tasksCollection.insertMany(tasks);
  console.log(result.insertedCount, " documents inserted successfully");
} catch (err) {
  console.error(
    "Something went wrong trying to insert the new documents: ",
    err
  );
} finally {
  await client.close();
  console.error("Connection closing");
}

try {
  const cursor = tasksCollection.find({ completed: false });
  while (await cursor.hasNext()) {
    console.log(await cursor.next());
  }
} catch (err) {
  console.error("Something went wrong in find: ", err);
} finally {
  await client.close();
  console.error("Connection closing");
}
