import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import { MdImportExport } from 'react-icons/md'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

