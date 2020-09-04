import React, { Component } from "react";
import "./style.css";

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Path: () => console.log(),
      compID: "",
      name: "",
    };
  }

  componentDidMount() {
    this.checkState();
    this.timer = setInterval(() => this.checkState(), 50000);
  }

  checkState = () => {
    switch (this.props.number) {
      case 1:
        this.setState({ Path: () => console.log("home") });
        this.setState({ compID: "left-Meny-Box" });
        this.setState({ name: "Home" });
        break;

      case 2:
        this.setState({ Path: () => console.log("home") });
        this.setState({ compID: "meny-Button-2" });
        this.setState({ name: "Catagories" });
        break;

      case 3:
        this.setState({ Path: () => console.log("home") });
        this.setState({ compID: "meny-Button-3" });
        this.setState({ name: "arkivet" });
        break;

      case 4:
        this.setState({ Path: () => console.log("home") });
        this.setState({ compID: "meny-Button-4" });
        this.setState({ name: "om oss" });
        break;

      case 5:
        this.setState({ Path: () => this.props.showLogin(true) });
        this.setState({ compID: "right-Meny-Box" });
        this.setState({ name: "logga in" });
        break;
      case 6:
        this.setState({ Path: () => this.props.showLogin("") });
        this.setState({ compID: "right-Meny-Box" });
        this.setState({ name: "logga ut" });
        break;
      default:
        this.setState({ Path: () => console.log("home") });
        this.setState({ compID: "" });
        this.setState({ name: "" });
        break;
    }
  };

  render() {
    return (
      <button
        onClick={this.state.Path}
        id={this.state.compID}
        className="meny-Box"
      >
        <p>
          <b>
            <u>{this.state.name}</u>
          </b>
        </p>
      </button>
    );
  }
}
export default MenuButton;
