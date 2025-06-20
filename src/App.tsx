import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomRequestPage from './pages/CustomRequestPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ShopPage from './pages/ShopPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/artworks" element={<ProductListPage />} />
          <Route path="/artworks/:id" element={<ProductDetailPage />} />
          <Route path="/custom-request" element={<CustomRequestPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/shop/:id" element={<ShopPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          {/* Add more routes here */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default App
