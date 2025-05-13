import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>About StoryVerse</h5>
            <p>Your daily dose of stories, blogs, and inspiration. Discover, read, and write!</p>
          </div>

          <div className="col-md-2 mb-3">
            <h6>Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/stories" className="footer-link">All Stories</Link></li>
              <li><Link to="/categories" className="footer-link">Categories</Link></li>
              <li><Link to="/authors" className="footer-link">Authors</Link></li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p>jethavayax99@gmail.com</p>
            <p>Instagram: @yaxjethava</p>
          </div>
        </div>

        <hr className="my-3 border-light" />
        <div className="text-center pb-3">
          <small>&copy; {new Date().getFullYear()} StoryVerse. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
