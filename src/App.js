
import './App.css';

import React, { Component } from 'react'
import Navbarr from './Components/Navbarr';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
state={
  progress:0
}
  pageSize=5;
setProgress = (progress)=>{
  this.setState({
    progress:progress
  })
}
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbarr/>
      <LoadingBar
      height= {3}
        color='#f11946'
        progress={this.state.progress}
       
      />
      <div className="container">
      <Routes>
       
       
       
       <Route exact path="/"   element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="general" country="in" category="general"/>}/>
       <Route exact path="/business"  element={ <News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key="business" category="business"/>}/>
        <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key="entertainment" category="entertainment"/>}/>
        
        <Route exact path="/health"  element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="in" category="health"/>}/>
        <Route exact path="/science"  element={<News setProgress={this.setProgress} pageSize={this.pageSize} country="in" key="science" category="science"/>}/>
        <Route exact path="/sports"  element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country="in" category="sports"/>}/>
        <Route exact path="/technology"  element={<News setProgress={this.setProgress} pageSize={this.pageSize}  key="technology" country="in" category="technology"/>}/>

        
        </Routes>'
        </div>
        </BrowserRouter>
       </>
    
    )
  }
}
// news api key => c83ff1480b6a4c77aa1dd2fbcbf86d43