import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <p>Hello, {this.state.name}</p>
      </div>
    );
  }
}

export default App;
