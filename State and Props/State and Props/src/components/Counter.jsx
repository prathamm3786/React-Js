import React, { Component } from "react";
import Users from "./Users";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      users: [
        { name: "Pratham", age: 20, email: "pratham@gmail.com" },
        { name: "Keyur", age: 21, email: "keyur@gmail.com" },
        { name: "Sagar", age: 21, email: "sagar@gmail.com" },
        { name: "Rohit", age: 19, email: "rohit@gmail.com" },
        { name: "Vishwa", age: 23, email: "vishwa@gmail.com" },
      ],
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 1 });
  };

  render() {
    const { count, users } = this.state;

    return (
      <div>
        Count: {count}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement} disabled={count === 1}>
          -
        </button>
        <button onClick={this.handleReset} disabled={count === 1}>
          Reset
        </button>
        <Users users={users} />
      </div>
    );
  }
}

export default State;
