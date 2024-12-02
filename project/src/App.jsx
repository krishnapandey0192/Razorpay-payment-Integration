import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { CartPage } from "./components/Cart/CartPage";
import { Header } from "./components/Layout/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { LoginForm } from "./components/Auth/LoginForm";
import { RegisterForm } from "./components/Auth/RegisterForm";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { WelcomePage } from "./components/Welcome/WelcomePage";
import "react-toastify/dist/ReactToastify.css";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="py-8 px-4">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Featured Products
                  </h1>
                  <ProductList />
                </div>
              ) : (
                <WelcomePage />
              )
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/paymentsuccess"
            element={
              <PrivateRoute>
                <PaymentSuccess />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
