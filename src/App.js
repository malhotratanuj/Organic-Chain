import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import NoMatchFound from './Pages/NoMatchFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Product from './Pages/Product';
import { ToastContainer } from 'react-toastify';
import Services from './Pages/Services';
import Offer from './Pages/Offer';
import Fulfilment from './Pages/Fulfilment';
import Withdraw from './Pages/Withdraw';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="services" element={<Services />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="fulfilment" element={<Fulfilment />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="buy-offer" element={<Offer />} />
          <Route path="sell-offer" element={<Offer sell={true} />} />
          <Route path="products" element={<Product />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatchFound/>} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}
function Layout(){
  return(
    <>
      <Header/>
      <div className='min-h'>
        <Outlet/>
      </div>
      <Footer/>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition= "Bounce"
      />
    </>
  )
}
export default App;
