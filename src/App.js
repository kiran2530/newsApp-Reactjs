
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={8} category="general" title="Top Headlines" />} />
            <Route exact path='/business' element={<News key="business" pageSize={8} category="business" title="Business News" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={8} category="entertainment" title="Entertainment News" />} />
            <Route exact path='/general' element={<News key="general" pageSize={8} category="general" title="General News" />} />
            <Route exact path='/health' element={<News key="health" pageSize={8} category="health" title="Health News" />}  />
            <Route exact path='/science' element={<News key="science" pageSize={8} category="science" title="Science News" />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={8} category="sports" title="Sports News" />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={8} category="technology" title="Technology News" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}