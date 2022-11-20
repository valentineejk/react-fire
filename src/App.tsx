import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/navbar';
import { Create } from './pages/create-post/create';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create' element={<Create/>}/>

  </Routes>
</Router>
    </div>
  );
}

export default App;
