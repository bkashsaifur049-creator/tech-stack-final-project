function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="brand">
          <h2>TechStack</h2>
          <p>
            Build your perfect technology stack and
            explore modern development tools.
          </p>

          <div className="social">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <a href="#">Technologies</a>
            <a href="#">Your Stack</a>
            <a href="#">Features</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">License</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TechStack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;