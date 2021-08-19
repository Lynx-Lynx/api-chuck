import React, { Component } from 'react';
import Header from './components/header';
import './styles/App.css';
import './styles/button.style.css';
import { Card } from './components/card.component';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fact: {}
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => this.setState({ fact: joke }));
  }

  handleClick() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => this.setState({ fact: joke }));
  }

  render() {
    const { fact } = this.state;
    return (
      <>
      <Header />
      <div className="App">
      <Card fact={fact}/>
      <button className='button' onClick={this.handleClick}>Go!</button>
      </div>
      </>
    );
  }
} 


export default App;
