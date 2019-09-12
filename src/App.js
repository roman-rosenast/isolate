import React, { Component } from 'react';
import './App.css';
import Day from './Day.js';
import Intro from './Intro.js';
import {userBAndB, userCAndT, userSAndC } from './UserDays.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introducing: true,

      myDayTitle: null,
      myDay: null,
    }

    // Dont forget to bind funcitons!
    this.setDay = this.setDay.bind(this);
    this.endIntro = this.endIntro.bind(this);
  }

  setDay(dayName) {
    this.setState({
      myDayTitle: dayName
    });

    // Here is where we import our Days Data

    if (dayName === 'Back and Bicep') {
      this.setState({
        myDay: userBAndB
      })
    }

    else if (dayName === 'Chest and Tricep') {
      this.setState({
        myDay: userCAndT
      })
    }

    else if (dayName === 'Shoulder and Core') {
      this.setState({
        myDay: userSAndC
      })
    };

  };

  endIntro() {
    this.setState({
      introducing: false
    })
  }

  render() {
    return (this.state.introducing ? this.renderIntro() : this.renderApp() );
  }

  renderApp() {
    return (
      <div className="App">
        <Day myDay={this.state.myDay} myDayTitle={this.state.myDayTitle}/>
      </div>
    );
  }

  renderIntro() {
    return (
      <div className="App">
        <Intro setDay={this.setDay} endIntro={this.endIntro} />
      </div>
    );
  }

}

export default App;
