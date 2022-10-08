require("dotenv").config();

const cors = require("express");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "riot",
  },
  {
    id: 2,
    name: "koko",
  },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(process.env.PORT, () => console.log(process.env.PORT));
