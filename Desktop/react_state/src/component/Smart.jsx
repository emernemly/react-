import React, { Component } from "react";
import Test from "./Test.jsx";
class Smart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Emer",
      lastName: "nemly",
      email: "nemlyemer@gmail.com",
      show: false,
      message: "Your message...",
      counter: 0,
    };
  }
  revers = () => {
    this.setState({ show: !this.state.show });
  };
  msg = (evnt) => {
    this.setState({ message: evnt.target.value });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="card">
        {this.state.show ? (
          <div className="profile">
            <h1>first name:{this.state.name}</h1>
            <h2>last name:{this.state.lastName}</h2>
            <h3>email:{this.state.email}</h3>
          </div>
        ) : null}
        <button onClick={this.revers}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        <input type="text" placeholder="send message" onChange={this.msg} />
        <h3>{this.state.message}</h3>
        <h1>{this.state.counter}</h1>
        <Test counter={this.state.counter} />
      </div>
    );
  }
}

export default Smart;
