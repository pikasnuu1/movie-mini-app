import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];


  return (
    <Router>
      <Routes>
        <Route path="/" element={<>you're home</>}/>
        <Route path="/movies" element={<>you're in movies</>}/>
      </Routes>
    </Router>
  );
}

export default App;
