import React from 'react';
import '../Styles/footer.css';

export default function Footer() {
  return (
    <div>
     <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h6 className="footer-title">Company Name</h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Products</h6>
            <ul>
              <li><a href="#">MDBootstrap</a></li>
              <li><a href="#">MDWordPress</a></li>
              <li><a href="#">BrandFlow</a></li>
              <li><a href="#">Bootstrap Angular</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Useful Links</h6>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="footer-title">Contact</h6>
            <p>New York, NY 10012, US</p>
            <p>Email: info@gmail.com</p>
            <p>Phone: +01 234 567 88</p>
            <p>Fax: +01 234 567 89</p>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2023 Company Name. All Rights Reserved.
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
