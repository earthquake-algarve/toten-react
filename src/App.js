import Header from './components/header/Header'
import Details from './pages/details/Details'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Login from './pages/login/Login'
import Home from './pages/Home' 
import Checkout from './pages//checkout/Checkout' 
import {Route , Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Header />
      
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </div>
    </>
  )
}

