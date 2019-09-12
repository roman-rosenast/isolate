import React, { Component } from 'react';
import './App.css';

class Intro1 extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="intro1" onClick={ () => {this.props.nextStep()} }>
        <p>Disable Notifications Please</p>
      </div>
    )
  }
}

export default Intro1;
