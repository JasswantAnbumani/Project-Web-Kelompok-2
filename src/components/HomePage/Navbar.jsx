import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo glow-text">Nebulix</div>
      <ul className="nav-links glow-text">
        <li><a href="Login">Login/Sign Up</a></li>
        <li><a href="Home">Home</a></li>
        <li><a href="Articles">Articles</a></li>
        <li><a href="AboutUs">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
