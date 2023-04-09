const mongoose=require("mongoose");

//creating database
const DB='mongodb+srv://aaveg2023:aaveg2023@cluster0.o47f5ea.mongodb.net/registration?retryWrites=true&w=majority'
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database");
}).catch((error) => {
  console.log("Failed to connect to the database: " + error.message);
})
 