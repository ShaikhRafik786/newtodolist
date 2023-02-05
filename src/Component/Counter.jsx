import React, { Component } from "react";
class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>{" "}
        <br />
        <button onClick={() => this.setState({ counter: 0 })}>
          Resset
        </button>{" "}
        <br />
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrement
        </button>{" "}
        <br />
      </div>
    );
  }
}
export default CounterClass;
