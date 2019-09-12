import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown.js';


class Set extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: true,
      downTime: 1,
      remainingDownTime: 1,
      buttonColor: 'white'
    }

    this.renderUp = this.renderUp.bind(this)
		this.renderDown = this.renderDown.bind(this)
    this.endSet = this.endSet.bind(this)
    this.startSet = this.startSet.bind(this)
    this.updateParent = this.updateParent.bind(this)

  }

  renderUp() {
    return (
      <div className="buttonbg">
        <button className="endSetButton centeredElement"
              onClick={() => this.endSet()}>
          End Set
        </button>
      </div>
    )
  }

  renderDown() {

    // Note, call the this.endSet() method once timer runs out!
    return (
      <div>
        <div className="spacer"></div>
        <div className="cooldownReminder">Rest</div>
        <div className="centeredElement downTimerContainer" alt="END SET BUTTON">
          <div className="centeredTime">
            <Countdown seconds={this.state.downTime} updateParent={this.updateParent} />
          </div>
        </div>
      </div>
    )
  }

  updateParent() {

    // updates the remainingDownTime instance variable.
    this.setState(prevState => ({
      remainingDownTime: prevState.remainingDownTime - 1
    }))

    // checks if there is no more remaining time and ends set if so.
    if (this.state.remainingDownTime === 0) {
      this.setState({ active: true })
    }
  }

  endSet() {
    this.setState({
      active: false,
      remainingDownTime: this.state.downTime,
      buttonColor: 'blue'
    });

    //decrement the remainingSets var.
    this.props.updateRemainingSets();
  }

  startSet() {
    this.setState({
      active: true
    })
  }

  render() {
    return this.state.active ? this.renderUp() : this.renderDown()
  }
}

export default Set;
