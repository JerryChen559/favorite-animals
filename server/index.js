require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
// const session = require("express-session");
const port = 4000;

const {
  getAllAnimals,
  getAnimal,
  addAnimal,
  updateAnimal,
  deleteAnimal
} = require("./AnimalCtrl");

const app = express();
app.use(json());
app.use(cors());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks 1209600000
//     }
//   })
// );

// npm run build when done. uncomment after
//app.use(express.static(`${__dirname}/../build`));
//app.use(express.static(`${__dirname}/public/build`));

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance
    //   .create_animal_table()
    //   .then(resonse => {
    //     console.log("Table Created");
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(err => {
    console.log(err);
  });

// test endpoint
// app.get("/api/test", (req, res) => {
//   res.status(200).json("Test Route Works!!!");
// });

app.get("/api/allanimals", getAllAnimals);
app.get("/api/animal/:id", getAnimal);
app.post("/api/animal", addAnimal);
app.put("/api/animal/:id", updateAnimal);
app.delete("/api/animal/:id", deleteAnimal);

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
