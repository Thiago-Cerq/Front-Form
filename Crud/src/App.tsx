import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Post from './pages/post'
import Edit from './pages/edit'
import Reed from './pages/reed'
import Feed from './pages/feed';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path="/" Component={Feed}/>
            <Route path="/post" Component={Post}/>
            <Route path="/edit" Component={Edit} />
            <Route path="/reed" Component={Reed}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
