const mongoose = require("mongoose");
const validator = require("validator");

const UserActivation = mongoose.model("UserActivation", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Geçersiz e-posta formatı");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8, 
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Şifre 'password' içeremez");
      }
    },
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Geçersiz yaş. Yaş 0'dan büyük veya eşit olmalıdır");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

async function run() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://hmyrcmn:Humeyra.106@hmyrcmn.urli8wf.mongodb.net/?retryWrites=true&w=majority&appName=hmyrcmn&dbName=newdb"
    );
    console.log("MongoDB'ye bağlandı");

    const testUser = new UserActivation({
      name: " humeyra    ",
      age: 24, 
      email: "  humeyracimen@gmail.com",
      password: "jfdvbfd.100", 
    });
    await testUser.save();
    console.log("Kaydedildi:", testUser);

    const newTask = new Task({
      description: "homework task",
    });
    const newTask2 = new Task({
      description: "cleaning task",
      completed: true,
    });
    await newTask.save();
    console.log("Yeni görev kaydedildi:", newTask);
    await newTask2.save();
    console.log("Yeni görev kaydedildi:", newTask2);

    await mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
  } catch (error) {
    console.error("Hata:", error);
  }
}

run().catch(console.dir);
