// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Contactus from "./components/Home/Contactus/Contactus";
import Support from "./components/Home/Support/Support";
import Error from "./components/Shared/Error/Error";
import Product from "./components/Home/Product/Product";
import AddProduct from "./components/Home/AddProduct/AddProduct";
import MakeAdmin from "./components/Home/MakeAdmin/MakeAdmin";
import UserReview from "./components/Home/UserReview/UserReview";
import Cart from "./components/Home/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route exact path="/footer" element={<Footer />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/support" element={<Support />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/makeadmin" element={<MakeAdmin />} />
          <Route path="/review" element={<UserReview />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
