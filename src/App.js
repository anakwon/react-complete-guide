import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name : "Max", age : 29 },
      { name : "Manu", age : 30 },
      { name : "Stephanie", age : 26 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!'); 
    //DON'T DO THIS 
    //this.state.persons[0] = "Anna"

    this.setState({
      persons : [
        { name : newName, age : 25 },
        { name : "Manu", age : 30 },
        { name : "Stephanie", age : 32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name : "Max", age : 25 },
        { name : event.target.value, age : 30 },
        { name : "Stephanie", age : 32 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Is this really working?</p>
        <button onClick={() => this.switchNameHandler('Annnnna')}>Switch Name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Anna')}
          changed = {this.nameChangedHandler}
          >My Hobbies: Racing</Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
    
    //return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Does this work now??'));
  }
}

export default App;
