import React, { Component } from 'react';
import './App.css';
import Intro1 from './Intro1.js';
import Intro2 from './Intro2.js';
import Intro3 from './Intro3.js';


class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      duration: null
    }

    //Dont forget to bind funcitons!
    this.nextStep = this.nextStep.bind(this);
    this.bAndB = this.bAndB.bind(this);
    this.cAndT = this.cAndT.bind(this);
    this.sAndC = this.sAndC.bind(this);

  }

  nextStep() {
    this.setState(prevState => ({
      step: prevState.step + 1
    }));
  }

  // Duration should be approximately 4200 seconds

  bAndB() {
    this.setState({
      duration: 50
    });

    this.props.setDay('Back and Bicep');

    this.nextStep();
  }

  cAndT() {
    this.setState({
      duration: 60
    });

    this.props.setDay('Chest and Tricep');

    this.nextStep();
  }

  sAndC() {
    this.setState({
      duration: 60
    });

    this.props.setDay('Shoulder and Core');

    this.nextStep();
  }

  render() {
    if (this.state.step === 1) {
      return (
        <Intro1 className="intro1" nextStep={this.nextStep} />
      )
    }

    else if (this.state.step === 2) {
      return (
        <Intro2 className="intro2"
                nextStep={this.nextStep}
                bAndB={this.bAndB}
                cAndT={this.cAndT}
                sAndC={this.sAndC} />
      )
    }
    else if (this.state.step === 3) {
      return (
        <Intro3 className="intro3" nextStep={this.nextStep} duration={this.state.duration} />
      )
    }
    else {
      this.props.endIntro();
      return (
        <div className="endIntro"></div>
      )
    }
  }
}

export default Intro;
