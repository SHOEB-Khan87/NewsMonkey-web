
import './App.css';

import React, { useState } from 'react'
import Navbarr from './Components/Navbarr';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

const  App = ()=> {
const [progress,setProgress] = useState(0)


 const pageSize=5;

 
    return (
      <>
      <BrowserRouter>
      <Navbarr/>
      <LoadingBar
      height= {3}
        color='#f11946'
        progress={progress}
       
      />
      <div className="container">
      <Routes>
       
       
       
       <Route exact path="/"   element={<News setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general"/>}/>
       <Route exact path="/business"  element={ <News setProgress={setProgress} pageSize={pageSize} country="in" key="business" category="business"/>}/>
        <Route exact path="/entertainment"  element={<News setProgress={setProgress} pageSize={pageSize} country="in" key="entertainment" category="entertainment"/>}/>
        
        <Route exact path="/health"  element={<News setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health"/>}/>
        <Route exact path="/science"  element={<News setProgress={setProgress} pageSize={pageSize} country="in" key="science" category="science"/>}/>
        <Route exact path="/sports"  element={<News setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports"/>}/>
        <Route exact path="/technology"  element={<News setProgress={setProgress} pageSize={pageSize}  key="technology" country="in" category="technology"/>}/>

        
        </Routes>'
        </div>
        </BrowserRouter>
       </>
    
    )
  }

// news api key => c83ff1480b6a4c77aa1dd2fbcbf86d43
export default App