// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import ContactUs from "./Components/Home/Contactus/Contactus";
import Support from "./Components/Home/Support/Support";
import Error from "./Components/Shared/Error/Error";
import Product from "./Components/Home/Product/Product";
import AddProduct from "./Components/Home/AddProduct/AddProduct";
import MakeAdmin from "./Components/Home/MakeAdmin/MakeAdmin";
import UserReview from "./Components/Home/UserReview/UserReview";
import Cart from "./Components/Home/Cart/Cart";
import AuthProvider from "./Components/Context/AuthProvider";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/LoginPage/Login/Login ";
import Registration from "./Components/Pages/LoginPage/Registration/Registration";
import NavigationBar from "./Components/Pages/Shared/NavigationBar/NavigationBar";
import Home from "./Components/Pages/Home/Home/Home";
import DashboardHome from "./Components/Pages/Dashboard/DashboardHome/DashboardHome";
import ManageAllOrders from "./Components/Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import AddProducts from "./Components/Pages/Dashboard/AddProducts/AddProducts";
import ManageProducts from "./Components/Pages/Dashboard/ManageProducts/ManageProducts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />

            <Route exact path='/footer' element={<Footer />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/support' element={<Support />} />
            <Route path='/product' element={<Product />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/makeadmin' element={<MakeAdmin />} />
            <Route path='/review' element={<UserReview />} />
            <Route
              path='/cart'
              element={
                <PrivateRoute>
                  <Cart />{" "}
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Error />} />
            {/* Dashboard */}
            <Route
              path='/dashboard/'
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            >
              <Route
                path='dashboard'
                element={
                  <PrivateRoute>
                    <DashboardHome />{" "}
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='myOrders'
                element={
                  <PrivateRoute>
                    <ManageAllOrders />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='addProducts'
                element={
                  <PrivateRoute>
                    <AddProducts />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='manageAllOrders'
                element={
                  <PrivateRoute>
                    <ManageAllOrders />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='manageProducts'
                element={
                  <PrivateRoute>
                    <ManageProducts />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path='makeAdmin'
                element={
                  <PrivateRoute>
                    <MakeAdmin />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
