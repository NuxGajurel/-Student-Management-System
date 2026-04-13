import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './elements/Create'
import Edit from './elements/Edit'
import Read from './elements/Read'
import Home from './elements/Home'
const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/read/:id' element={<Read/>} />
      </Routes>
      
      </BrowserRouter>
   
  )
}

export default App