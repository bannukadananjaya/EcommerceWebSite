import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';

function App() {
  

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/mens" element={<ShopCategory category="mens"/>}></Route>
          <Route path="/womens" element={<ShopCategory category="womens"/>}></Route>
          <Route path="/kids" element={<ShopCategory category="kids"/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path=":productId" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

        </Routes>
      </Router>
      
    </>
  )
}

export default App;
