
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'component';

  render() {
    return (
      <div>
        <h1>hi this is class base {this.c} </h1>
      </div>
    )
  }
}

