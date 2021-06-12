const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const serverURI = "http://localhost:" + PORT;
const mongoURI = process.env.MONGOURI;

app.listen(PORT, () => console.log("Webserver: " + serverURI));

mongoose.set("useCreateIndex", true).connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to Database")
);
