import React from 'react'
import './Footer.css'


function FooterBanner() {

    
        return (
            <footer className="footers">
                <div className='footer'>
              <div className="footer-section1">
                <h2>Explore</h2>
                <ul>
                  <li>Home</li>
                  <li>Question</li>
                  <li>Article</li>
                  <li>Tutorials</li>
                </ul>
              </div>
              <div className="footer-section2">
                <h2>Support</h2>
                <ul>
                  <li>FAQs</li>
                  <li>Help</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="footer-section3">
                <h2>Stay connected with us</h2>
                <img src = "https://www.freeiconspng.com/uploads/facebook-icon-5.png" alt = "Fbook" className = 'logo1'/>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt = "insta" className = 'logo2'/>
                <img src = "https://logowik.com/content/uploads/images/761_twitter.jpg" alt = "tweet" className = 'logo3'/>
                
              </div>
            </div>
            
              <div className="footer-bottom">
                <h1>Dev@Deakin 2022</h1>
                <ul className="footer-list">
                  <li>Privacy Policy</li>
                  <li>Terms</li>
                  <li>Code of Conduct</li>
                </ul>
              </div>
            </footer>
            
          );

    
}

export default FooterBanner