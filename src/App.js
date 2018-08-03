import React, { Component } from 'react';
import './App.css';

// first we will make a new context
const myContext = React.createContext()

//the create a Provider Component
class MyProvider extends Component {
  state = {
    name: "Manjula",
    age: 26,
    isEmployed: true
  }
  render(){
    return(
    <myContext.Provider value={
      {state: this.state}}>
      {this.props.children}
    </myContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className= "family">
  <Person/>
  </div>
)
class Person extends Component {

  render(){
    return(
      <div className="person">
         <myContext.Consumer>
         {(context) => (
            <p> I am {context.state.name} </p>
         )}
         </myContext.Consumer>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider >
        <div className="App">
          <p>I am person</p>
          <Family/>
        </div>
      </MyProvider>
    );
  }
}

export default App;
