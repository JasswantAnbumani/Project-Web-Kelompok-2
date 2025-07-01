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
  document.title = "Nebulix";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BlackholeLoader />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <RouteChangeLoader>
            <div className="app">
              <CursorGlow />
              <ConstellationCanvas />
              <ShootingStars />
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Articles />
                      <Footer />
                    </>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/articles"
                  element={
                    <PrivateRoute>
                      <ArticlesPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <UserProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/aboutus"
                  element={
                    <PrivateRoute>
                      <AboutUs />
                    </PrivateRoute>
                  }
                />
                <Route
                path='/jasswant' element={<PortfolioJasswant />}
                />
                <Route
                path='/alfrido' element={<PortfolioAlfrido />}
                />
                <Route
                path='/agnes' element={<PortfolioAgnes />}
                />
                <Route
                path='/poda' element={<PortfolioPoda />}
                />

              </Routes>
              
            </div>
          </RouteChangeLoader>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
