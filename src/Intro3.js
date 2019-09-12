import React, { Component } from 'react';
import './App.css';

class Intro3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="intro1" onClick={ () => {this.props.nextStep()} } >
        Get a playlist ready for a {this.props.duration} minute workout.
      </div>
    )
  }
}

export default Intro3;
