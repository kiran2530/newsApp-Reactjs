
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress : 0
  }
  setProgress = (progress)=> {
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar height={3} color='#f11946' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress} key="general" pageSize={8} category="general" title="Top Headlines" />} />
            <Route exact path='/business' element={<News setProgress = {this.setProgress} key="business" pageSize={8} category="business" title="Business News" />} />
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} key="entertainment" pageSize={8} category="entertainment" title="Entertainment News" />} />
            <Route exact path='/general' element={<News setProgress = {this.setProgress} key="general" pageSize={8} category="general" title="General News" />} />
            <Route exact path='/health' element={<News setProgress = {this.setProgress} key="health" pageSize={8} category="health" title="Health News" />}  />
            <Route exact path='/science' element={<News setProgress = {this.setProgress} key="science" pageSize={8} category="science" title="Science News" />} />
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} key="sports" pageSize={8} category="sports" title="Sports News" />} />
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} key="technology" pageSize={8} category="technology" title="Technology News" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}