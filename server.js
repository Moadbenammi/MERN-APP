const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/Items");

const app = express();

app.use(bodyParser.json());
app.use("/api/items", items);

const DB = require("./config/keys.js").mongoURI;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB)
  .then(
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}!`)
    )
  )
  .catch((err) => console.log(err.message));
