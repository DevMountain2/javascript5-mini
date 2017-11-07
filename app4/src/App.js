import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
      this.setState({
        cars: res.data
      });
    });
  }

  render() {
    const cars = this.state.cars.map((c, i) => (
      <div key={i}>
        <ul>
          <li>
            {c.color} {c.make} {c.model}
          </li>
        </ul>
      </div>
    ));
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
