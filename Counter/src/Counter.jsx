import React, { Component } from 'react';
import './Counter.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count : this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count : this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count : 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">
          <button className="button" onClick={this.increment}>+</button>
          <div className="count">{this.state.count}</div>
          
          {
            this.state.count<=0 ?<button disabled className="button" onClick={this.decrement}>-</button>
            :<button className="button" onClick={this.decrement}>-</button>
        }
        </div>
        
        {
            this.state.count<=0 ?<button disabled className="reset-button" onClick={this.reset}>R</button>
            :<button className="reset-button" onClick={this.reset}>R</button>
        }
      </div>
    );
  }
}

export default Counter;