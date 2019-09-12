import React, { Component } from 'react';
import './App.css';
import Set from './Set.js';

class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: 5,
      remainingSets: 5
    }

    this.updateRemainingSets = this.updateRemainingSets.bind(this)
  }

  updateRemainingSets() {
    this.setState(prevState => ({
      remainingSets: prevState.remainingSets - 1
    }));

    // When we have done all of our sets, move onto next workout in workouts[],
    // which belongs to the parent component.
    if (this.state.remainingSets === 1) {

      this.props.nextWorkout();
      this.setState({
        remainingSets: 5
      });
    };
  }

  render() {
    return (
      <div className = "wrapper">
        <Set updateRemainingSets={this.updateRemainingSets} />
      </div>
    )
  }
}

export default Workout;
