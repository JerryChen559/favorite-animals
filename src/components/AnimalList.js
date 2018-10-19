import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class AnimalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animal_name: "",
      legs: 0,
      animals: []
    };

    this.addAnimal = this.addAnimal.bind(this);
  }

  componentDidMount() {
    this.getAllAnimales();
  }

  getAllAnimales = () => {
    axios.get("http://localhost:4000/api/allanimals").then(response => {
      console.log(response);
      this.setState({ animals: response.data });
    });
  };

  addAnimal() {
    const { animal_name, legs } = this.state;
    axios
      .post("http://localhost:4000/api/animal", { animal_name, legs })
      .then(response => {
        this.setState({ animals: response.data });
      })
      .catch(error => console.log(error));
  }

  deleteAnimal(id) {
    axios
      .delete(`http://localhost:4000/api/animal/${id}`)
      .then(response => {
        this.setState({ animals: response.data });
      })
      .catch(error => console.log(error));
  }

  handleInput(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    console.log(this.state);

    const list = this.state.animals.map((animal, ind) => {
      return (
        <div key={ind}>
          <Link
            to={{
              pathname: `/animalEdit/${animal.id}`,
              state: { id: animal.id }
            }}
          >
            <h3>Animal name: {animal.animal_name}</h3>
            <h3>Number of legs: {animal.legs}</h3>
          </Link>
          <button onClick={() => this.deleteAnimal(animal.id)}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <h2>Your favorite animals below: </h2>
        <h6>(click on an animal to edit)</h6>

        <div>Add Animal Form</div>
        <input
          type="text"
          placeholder="enter animal name"
          value={this.state.animal_name}
          onChange={e => this.handleInput("animal_name", e.target.value)}
        />
        <input
          type="number"
          placeholder="enter number of legs"
          value={this.state.legs}
          onChange={e => this.handleInput("legs", e.target.value)}
        />

        <button onClick={this.addAnimal}>Add</button>

        {list}
      </div>
    );
  }
}

export default AnimalList;
