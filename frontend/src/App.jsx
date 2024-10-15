import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

function App() {
  

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/mens" element={<ShopCategory category="men" banner={men_banner}/>}></Route>
          <Route path="/womens" element={<ShopCategory category="women" banner={women_banner}/>}></Route>
          <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner}/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path=":productId" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      <Footer/>  
      </Router>
      
    </>
  )
}

export default App;
