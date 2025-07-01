// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/HomePage/Navbar.jsx';
import Hero from './components/HomePage/Hero.jsx';
import Articles from './components/HomePage/Article.jsx';
import Footer from './components/HomePage/Footer';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShootingStars from './components/HomePage/ShootingStars.jsx';
import ConstellationCanvas from './components/HomePage/ConstellationCanvas';
import Signup from './pages/Login&SignUpPage/Signup.jsx';
import Login from './pages/Login&SignUpPage/Login.jsx';
import { AuthProvider } from './pages/Login&SignUpPage/authContext';
import PrivateRoute from './pages/Login&SignUpPage/PrivateRoute.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlackholeLoader from './components/HomePage/BlackholeLoader.jsx';
import RouteChangeLoader from './components/HomePage/RouteChangeLoader.jsx';
import ArticlesPage from './pages/ArticlesPage/ArticlePage.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import CursorGlow from './components/HomePage/CursorGlow.jsx';
import PortfolioJasswant from './pages/Portofolio/PortofolioJasswant/PortofolioJasswant.jsx';
import PortfolioAlfrido from './pages/Portofolio/PortofolioAlfrido/PortofolioAlfrido.jsx';
import PortfolioAgnes from './pages/Portofolio/PortofolioAgnes/PortofolioAgnes.jsx';
import PortfolioPoda from './pages/Portofolio/PortofolioPoda/PortofolioPoda.jsx';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <ConstellationCanvas />
        <ShootingStars />
        <Navbar />
        <Hero /> 
        <Articles />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
