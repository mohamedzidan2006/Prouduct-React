import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Shop from './Shop';
import Product from './Product';
export default function App() {
  return ( 
    <div className='w-full  '>
    <BrowserRouter>
     <Link className="btn btn-secondary" to={'/Shop'}>ShopPage </Link>
    <Routes>
      <Route path="/Shop" element={<Shop/>}></Route>
     <Route path="/Shop/Product/:ProductId" element={<Product/>} ></Route> 
    </Routes>
    </BrowserRouter>
      </div>
  )
}

