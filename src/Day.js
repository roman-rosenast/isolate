import React, { Component } from 'react';
import './App.css';
import logo from './isolateIcon.svg';
import dumbbell_icon from './dumbbell-icon.svg';
import cal_icon from './cal-icon.svg';
import Workout from './Workout.js';
import MySound from './MySound.js'

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutIndex: 0,
    };

    this.nextWorkout = this.nextWorkout.bind(this);
  }

  nextWorkout() {
    // make the currentWorkout be the next element in workouts[].
    this.setState(prevState => ({
      workoutIndex: prevState.workoutIndex + 1
    }));
  }

  render() {
    return (
      <div>

        <MySound />

        <div className="header-wrapper">
          <div className="header1">
            <img src={cal_icon} className="header-icon" alt="logo" />
            <h1 className="App-title">{this.props.myDayTitle}</h1>
          </div>
          <div className="header2">
            <img src={dumbbell_icon} className="header-icon" alt="logo" />
            <h1 className="App-title">{this.props.myDay[this.state.workoutIndex]}</h1>
          </div>
        </div>

        <Workout nextWorkout={this.nextWorkout} />
      </div>
    );
  }
}

export default Day;
