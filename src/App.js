import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import {observer } from 'mobx-react';
import {action, extendObservable, observable, computed} from 'mobx';
import Test from './component/Test';
import logo from './logo.svg';
import './App.css';
import {setter} from 'mobx-decorators'


var appState = observable({
    timer: 0,
    item: []
});

var increment = function(){
  appState.timer++;
}
var decrement = function(){
  appState.timer--;
}

var addItem = function(name){
  appState.item.push(name)
  console.log("Added item with name ")
  console.log(name)
}


/*
setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);
*/

class App extends Component {


  render() {
    return (
      <div className="App">
        <DevTools />
         <Test name={appState} inc={increment} dec={decrement} addItem={addItem}/>
      </div>
    );
  }
}



export default App;
