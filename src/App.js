import React, { Component } from 'react';
import Data from './Data';
import App2 from './App2';
import './App.css';

class App extends Component {

  state = {
    deaths: null,
    confirmed: null,
    recovered: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
      const data = await response.json();
      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading: false,
      });
    } catch (error) {
      console.log(error)
    }
  }

  // componentDidMount() {
  //   fetch('https://enrichman.github.io/covid19/world/full.json')
  //     .then(res => res.json())
  //     .then(this.setState({
  //       deaths: data.deaths,
  //       confirmed: data.confirmed,
  //       recovered: data.recovered,
  //     }))
  //     .catch(err => console.log(err))
  // }


  render() {
    if (this.setState.loading) {
      return (<div>Cargando datos..</div>)
    }
    return (
      <>
        <Data deaths={this.state.deaths} confirmed={this.state.confirmed} recovered={this.state.recovered} />
        <App2 />
      </>
    );
  }
}



export default App;
