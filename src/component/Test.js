import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { extendObservable, observable } from 'mobx';
import {setter } from 'mobx-decorators'




const Test = observer(class Test extends Component {


  render() {
    return (
      <div>
        Testing
        {this.props.name.timer}
        <br/>
        <div onClick={this.props.inc}>Add One</div>
        <br/>
        <div onClick={this.props.dec}>Subtract One</div>
      </div>
    );
  }
})

export default Test;
