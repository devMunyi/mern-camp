require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { readdirSync } = require("fs");

const app = express();
const port = process.env.PORT || process.env.LOCAL_APP_PORT;

//db connection
const liveConnectionURL = process.env.liveMongodbURL; //to be used on live server
//const localConnectionURL = process.env.localMongodbURL; //to be used on localhost
mongoose
  .connect(liveConnectionURL, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR=>", err));

app.use(morgan("dev")); //allow us to see request coming from client side on the console
app.use(express.json({ limit: "5mb" })); //defining data to be received in json format from client side
app.use(express.urlencoded({ extended: true })); //allow receiving data from a from
app.use(cors()); //defines from which client request should come from or you leave it empty to allow any

//Autoload routes
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port}`));
