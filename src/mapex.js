import React, { useState, setState } from 'react';
import WelcomeGreetings from './WelcomeMsg.js';
class Mapex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrayNumbers: [1, 2, 3, 4, 5, 6, 7, 7, 88], value: 0 };
    this.add = this.add.bind(this);
    this.handletextChange = this.handletextChange.bind(this);
  }
  handletextChange(event) {
    this.setState({ value: event.target.value });
  }
  add() {
    var newnumber = this.state.value;
    var newarr = this.state.arrayNumbers.slice();
    if (newarr.indexOf(newnumber) == -1) newarr.push(newnumber);
    this.setState({ arrayNumbers: newarr });
    console.log(this.state.arrayNumbers);
  }
  render() {
    if (this.state.value == 5) {
      throw new Error('error');
    }
    return (
      <div>
        <span>{this.props.customprop}</span>
        <ul>
          {this.state.arrayNumbers &&
            this.state.arrayNumbers.map((item, index) => {
              return <li key={index.toString()}>{item}</li>;
            })}
        </ul>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handletextChange}
        />
        <button onClick={this.add}>Add </button>
        <WelcomeGreetings name={this.state.value} />
      </div>
    );
  }
}

export default Mapex;
