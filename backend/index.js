const mongoConnect = require("./db");
const express = require("express");
var cors = require("cors");

mongoConnect();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/bus", require("./routes/bus"));

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port} `);
});
