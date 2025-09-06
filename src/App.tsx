import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { CatalogPage } from '@/pages/CatalogPage';
import { ProductPage } from '@/pages/ProductPage';
import { BrandPage } from '@/pages/BrandPage';
import ProductsProvider from '@/contexts/ProductsContext';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ProductsProvider>
        <Router>
          <div className="min-h-screen">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/category/:category" element={<CatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/brand/:name" element={<BrandPage />} />
              </Routes>
            </main>
            <Footer />
            <Analytics mode="production" />
            <SpeedInsights />
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </Router>
      </ProductsProvider>
    </HelmetProvider>
  );
}

export default App;