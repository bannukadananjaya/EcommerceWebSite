import {BrowserRouter as  Router,Routes, Route } from 'express'

import Navbar from './components/Navbar/Navbar'
function App() {
  

  return (
    <>
    <Router>
      <div className="container">
        <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/' element={<Dashboard/>}/>

      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
