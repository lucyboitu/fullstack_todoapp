//import
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");

const local_uri = "mongodb:localhost:2701:27017/TODO_APP";
const live_uri =
  "mongodb+srv://tumi565:wdQ8McTpmzDf0Nlp@cluster0.4673k.mongodb.net/TODO_APP?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(live_uri)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("failed to connect", error);
  });

const app = express();

app.use(express.json());
app.use(cors());
app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

const port = 9999;

app.get("/", (req, res) => {
  res.send("api is ready!!!!");
});

app.listen(port, () => {
  console.log(`server is up port ${port}`);
});
