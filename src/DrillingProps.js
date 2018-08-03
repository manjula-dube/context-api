import React, { Component } from 'react';
import './App.css';

// const Family = (props) => (
//   <div className="family">
//     <Person name = {props.name}/>
//   </div>
// )
class Person extends Component {

  render() {
    return (
      <div>Hey I am {this.props.name}</div>
    )
  }  
}

class DrillingProps extends Component {
  state = {
    name: "manjula",
    age: 26,
    isEmployed: true
  }  

  render() {
    return (
        <div className="App">
          <p>I am DrillingProps</p>
          <Person name={this.state.name}/>
        </div>
    );
  }
}

export default DrillingProps;
