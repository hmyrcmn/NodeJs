const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const databaseName = "task-manager";
const uri =
  "mongodb+srv://hmyrcmn:Humeyra.106@hmyrcmn.urli8wf.mongodb.net/?retryWrites=true&w=majority&appName=hmyrcmn";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    const dbName = "taskManager";
    const database = client.db(dbName);
    const usersCollection = database.collection("users");
    const tasksCollection = database.collection("tasks");

    // Insert a document
    const result = await usersCollection.insertOne({
      name: "Deneme3",
      age: 28,
    });
    console.log("A document was inserted with the _id: ", result.insertedId);

    // Insert multiple documents
    const users = [
      { name: "Can", age: 22 },
      { name: "Canan", age: 23 },
    ];
    const usersInsertResult = await usersCollection.insertMany(users);
    console.log(usersInsertResult.insertedCount, " documents inserted successfully");

    // Update a document
    const updateResult = await usersCollection.updateOne(
      { name: "Can" },
      { $set: { age: 99 } }
    );
    console.log("Updated ", updateResult.modifiedCount, " documents");

    // Find documents
    const usersCursor = usersCollection.find();
    while (await usersCursor.hasNext()) {
      console.log(await usersCursor.next());
    }

    // Find a specific document
    const specificUser = await usersCollection.findOne({ name: "Can", age: 99 });
    if (!specificUser) console.log("Could not find user");
    else console.log("Found user: ", specificUser);

    // Insert tasks
    const tasks = [
      { description: "Clean the house", completed: true },
      { description: "Water plants", completed: false },
      { description: "See the doctor", completed: false },
    ];
    const tasksInsertResult = await tasksCollection.insertMany(tasks);
    console.log(tasksInsertResult.insertedCount, " tasks inserted successfully");

    // Find tasks
    const tasksCursor = tasksCollection.find({ completed: false });
    while (await tasksCursor.hasNext()) {
      console.log(await tasksCursor.next());
    }

  } catch (err) {
    console.error("Something went wrong: ", err);
  } finally {
    // Close connection
    await client.close();
    console.error("Connection closing");
  }
}

run();


// run();

//run().catch(console.dir);
// run();
// async function run() {
//   try {
//     const id = new ObjectId();
//     console.log(id);

//     console.log(id.toHexString());
//     console.log(id.getTimestamp()); //tarih ve saat bilgisini getiriyor

//     // Bağlantıyı kur
//     await client.connect();
//     console.log("Connected to MongoDB");

//     const db = client.db(databaseName);

//     // Kullanıcı ekle
//     await db.collection("users").insertOne({
//       _id: id,
//       name: "hum",
//       age: 22,
//     });

//     // Kullanıcıyı bul
//     const user = await db.collection("users").findOne({ name: "hum" },(error,user)=>{
//         if (error) console.log("kullanıcı bulunamadı ")
//     });
//     console.log("Bulunan Kullanıcı:", user);

//     // Görevleri ekle
//     await db.collection("tasks").insertMany([
//       {
//         description: "Odanı temizle",
//         completed: true,
//       },
//       {
//         description: "Çiçekleri sula",
//         completed: false,
//       },
//       {
//         description: "Ödevlerini yap",
//         completed: false,
//       },
//     ]);

//     console.log("Belgeler başarıyla eklendi.");
//   } catch (error) {
//     console.error("Bir hata oluştu:", error);
//   } finally {
//     await client.close();
//     console.log("Bağlantı kapatıldı");
//   }
// }

//run().catch(console.dir);
