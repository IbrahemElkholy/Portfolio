import React from 'react';
 
import './App.css';
 
import Navbar from './Components/Navbar'
import Contact from './Components/contact'
import Index from './Components/index'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Index}/>
      <Route exact path="/contact" component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
