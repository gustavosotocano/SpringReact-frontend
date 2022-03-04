import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import CounterButton from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

import logo from './logo.svg';
import './App.css';
import './boostrap/boostrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<CounterButton></CounterButton>*/}
      <TodoApp/>
      </div>
    );
  }
}

class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;