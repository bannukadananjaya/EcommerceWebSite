import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

function Admin() {
  return (
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin


{/* <div className="flex flex-grow w-full mx-auto min-h-screen  border border-solid border-red-600">
        <Sidebar className="flex-[0.2] min-h-screen border-r border-gray-300" />
        <div className="flex-[0.8] p-6 border border-solid border-red-300">
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route 
                <Route path="/listproduct" element={<ListProduct />} />
            </Routes> */}