const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const app = express();
const shus = require("./routes/route");

app.use(cors(corsOptions));
app.use("/", shus);
app.get("/", (req, res) => {
  res.json({ message: "WELCOME" });
});

app.listen(3000, () => {
  console.log("SERVER LISTENING TO 3000");
});
