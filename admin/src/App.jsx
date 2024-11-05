import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import AddProduct from './components/AddProduct'
import ListProduct from './components/ListProduct'

const App = () => {
 
  return (
    <>  
      <Router>
        <Navbar/>
        <div className="flex flex-grow w-full mx-auto min-h-screen  border border-solid border-red-600">
        <Sidebar className="flex-[0.2] min-h-screen border-r border-gray-300" />
        <div className="flex-[0.8] p-6 border border-solid border-red-300">
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/listproduct" element={<ListProduct />} />
            </Routes>
        </div>
    </div>
      </Router>    
      {/* <Navbar/>  */}

      {/* <Sidebar/> */}
      {/* <Admin/> */}
    </>
  )
}

export default App
