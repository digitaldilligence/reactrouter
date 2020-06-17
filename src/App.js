import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
