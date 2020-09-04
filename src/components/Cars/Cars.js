import React, { Component } from "react";
import "./style.css";
import CarDataBase from "../../DataBase/CarDatabase";

var CarsList = [];

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      carImg: "wait.jpg",
      flavor: "",
      score: "",
      like: "",
    };
  }

  componentDidMount() {
    this.fetchCars();
    this.timer = setInterval(() => this.fetchCars(), 50000);
  }

  fetchCars = () => {
    CarDataBase.collection("Car-base")
      .orderBy("Name")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          CarsList.push(doc);
        });
        this.updateState();
      });
  };

  updateState = () => {
    const data = CarsList[this.props.number].data();
    this.setState({ ...data });
  };

  render() {
    return (
      <div className="card">
        <h5>{this.state.Name}</h5>
        <img src={"/Bilder/" + this.state.carImg} alt={this.state.Name} />
        <p>{this.state.flavor}</p>
        <span>
          <div>{this.state.score}</div>
          {
            //<a></a>
          }
          <div>{this.state.like}</div>
        </span>
      </div>
    );
  }
}
export default Cars;
