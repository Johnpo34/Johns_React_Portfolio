import React from "react";
import logo from './logo.svg';
import './App.css';
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Aboutme/>
      <PortfolioContainer/>
      <Footer/>
    </div>
  );
}

export default App;
