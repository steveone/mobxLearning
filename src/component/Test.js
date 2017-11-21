import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { extendObservable, observable } from 'mobx';
import {setter } from 'mobx-decorators'
import {FormControl, Button} from 'react-bootstrap'



const Test = observer(class Test extends Component {
constructor() {
  super();
  this.state = { value: '' };
}

  handleChange(text) {
     this.setState({ value: text });
     console.log("in handlechange");
   }

    render() {

    let item = []
    if (this.props.name.item) {
      item = this.props.name.item
      console.log(this.props.name.item[0])
    }

    return (
      <div>
        Testing
        {this.props.name.timer}
        <br/>
        <div onClick={this.props.inc}>Add One</div>
        <br/>
        <div onClick={this.props.dec}>Subtract One</div>
        <br/>
        <FormControl
          id="myText"
          key='1'
          label="My text"
          placeholder="Enter some text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target.value)}
          />
        <Button key='2' id="Btn" onClick={() => this.props.addItem(this.state.value)}>Click</Button>
        <br/>
        {(item) && item.map((value) => {
          return <div>{value}</div>
        })}
      </div>
    );
  }
})

export default Test;
