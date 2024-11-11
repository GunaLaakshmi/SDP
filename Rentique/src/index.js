import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard'; // Make sure this path is correct
import Landing from './components/Landing';
import { AboutPage, Cart, Checkout, ContactPage, Home, Login, PageNotFound, Product, Products, Register } from "./pages";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* New Admin Dashboard Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
