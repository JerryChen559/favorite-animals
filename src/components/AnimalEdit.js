import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { updateName, updateLegs } from "../ducks/animalReducer";

class AnimalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      animal_name: "",
      legs: "",
      redirect: false
    };
  }

  componentDidMount() {
    this.getAnimal();
  }

  getAnimal = () => {
    axios
      .get(`http://localhost:4000/api/animal/${this.props.location.state.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data[0].id,
          animal_name: response.data[0].animal_name,
          legs: response.data[0].legs
        });
      });
  };

  handleSubmit() {
    console.log(this.state.id);
    axios
      .put(`http://localhost:4000/api/animal/${this.state.id}`, {
        animal_name: this.state.animal_name,
        legs: this.state.legs
      })
      .then(response => {
        console.log(response);
        this.setState({
          animal_name: response.data.animal_name,
          legs: response.data.legs,
          redirect: !this.state.redirect
        });
      });
  }

  updateName(val) {
    this.setState({ animal_name: val });
  }
  updateLegs(val) {
    this.setState({ legs: val });
  }

  render() {
    const { updateName, updateLegs } = this.props;
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect to="/animallist" />;
    }

    return (
      <div>
        <h3>Animal Edit Page</h3>
        <h4>Animal: {this.state.animal_name}</h4>
        <input type="text" onChange={e => this.updateName(e.target.value)} />
        <input type="number" onChange={e => this.updateLegs(e.target.value)} />

        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { animal_name, legs } = state;

  return {
    animal_name,
    legs
  };
}

export default connect(
  mapStateToProps,
  {
    updateName,
    updateLegs
  }
)(AnimalEdit);
