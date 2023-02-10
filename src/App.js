import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from './Login';
import Homepage from './Homepage';
import Browse from './Login/Browse';
import Browse1 from './Login/Browse1';
import Series from './Login/Series';
import Movies from './Login/Movies';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/browse1' element={<Browse1/>}/>
            <Route path='/genre' element={<Series/>}/>
            <Route path='/movies' element={<Movies/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
