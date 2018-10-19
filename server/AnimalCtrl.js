// GET all animals
const getAllAnimals = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_allanimals()
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// GET one animal
const getAnimal = (req, res) => {
  const { id } = req.params;
  const dbInstance = req.app.get("db");

  dbInstance
    .get_animal(id)
    // .then(console.log(id))
    // .then(console.log("get request worked!"))
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

// POST (add) an animal
const addAnimal = (req, res) => {
  const { animal_name, legs } = req.body;
  const dbInstance = req.app.get("db");

  dbInstance
    .add_animal([animal_name, legs])
    .then(response => {
      console.log("add:", response);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// PUT (update) an animal by id
const updateAnimal = (req, res) => {
  const { id } = req.params;
  const { animal_name, legs } = req.body;
  console.log(id, animal_name, legs);
  const dbInstance = req.app.get("db");

  dbInstance
    .update_animal([id, animal_name, legs])
    .then(response => {
      console.log(`"newArr:" ${response}`);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

// DELETE an animal by id
const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const dbInstance = req.app.get("db");

  dbInstance
    .delete_animal(id)
    .then(console.log(id))
    .then(response => {
      // console.log(`"newArr:" ${response}`);
      res.status(200).send(response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getAllAnimals,
  getAnimal,
  addAnimal,
  updateAnimal,
  deleteAnimal
};
