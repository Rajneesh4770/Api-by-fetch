// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import React, { useEffect, useState} from 'react';
import Api from './component/Api';
import Test from './component/Test';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

// class App extends React.Component{
//   render()
function App(){
return(
  <div>
    <Api/>
    <Test />
    {/* <Router>
      
      <Link to=" ">Api</Link>
      <Link to="/Test">Test</Link>

      <Route  path="./component/Api" Component={Api}/>
      <Route path ="./component/Test" Component={Test} />
     
    </Router> */}
    </div>
 
  
  
  
)
}





export default App



