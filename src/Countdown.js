import React, { Component } from 'react';
import './App.css';

class Countdown extends Component {
  constructor(props) {
      super(props);
      this.state = {
        seconds: props.seconds
      };
  }

  tick() {

    this.props.updateParent();

    this.setState(prevState => ({
      seconds: prevState.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.seconds}
      </div>
    );
  }
}

export default Countdown;
