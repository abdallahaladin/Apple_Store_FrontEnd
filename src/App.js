import React from 'react';
import Error from './pages/error';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import DashboardAdmin from './pages/SignInDashBoardAdmin';
import Admin from './pages/DashboardAdmin';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/editProduct';




import './css/Home.css';
// import './css/SignInAndSignUp.css';
import axios from 'axios';
import { BrowserRouter ,Routes,Route,useState } from 'react-router-dom';

import AboutUS from './pages/AboutUs';
import Shop from './pages/Shop';
import App01 from './pages/App01';
import AdminDashboard from './pages/admin_dashboard';
import Deletproduct from './pages/DeleteProduct';


function App() {
  return (
    <div className="App">
      {
        
        <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/admin_dashboard" element={<AdminDashboard/>} />
        <Route path="/deleteproduct" element={<Deletproduct/>} />

        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/editproduct" element={<EditProduct/>} />

        <Route path="/admin" element={<Admin/>} />

        <Route path="/SignInDashBoardAdmin" element={<DashboardAdmin/>} />

        <Route path="/App01" element={<App01/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgot" element={<ForgotPassword/>} />
      <Route path="/AboutUs" element={<AboutUS/>} />
      <Route path="/Shop" element={<Shop/>} />
         <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        
      }
    </div>
  );
}

export default App;
