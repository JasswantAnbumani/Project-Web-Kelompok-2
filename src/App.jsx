// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/HomePage/Navbar';
import Hero from './components/HomePage/Hero';
import Articles from './components/HomePage/Article';
import Footer from './components/HomePage/Footer';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter } from 'react-router-dom';
import ShootingStars from './components/HomePage/ShootingStars.jsx';
import ConstellationCanvas from './components/HomePage/ConstellationCanvas';


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
