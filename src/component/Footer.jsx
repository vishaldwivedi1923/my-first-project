// src/components/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const links = [
    { label: 'BOOK', url: '/book' },
    { label: 'ABOUT US', url: '/about' },
    { label: 'CONTACT US', url: 'https://dinkpickleball.in/contact-us' },
    { label: 'PRIVACY POLICY', url: '/privacy-policy' },
    { label: 'TERMS & CONDITIONS', url: '/terms-conditions' },
    { label: 'CANCELLATION & REFUND', url: '/refund-policy' },
  ];

  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <img src="/assets/dink.logo.png" alt="DINK" className="footer-logo" />
      </div>

      <div className="footer-links-section">
        <div className="social-media-wrapper">
        <div class="follow-along">
        <h4 className="follow-title">FOLLOW ALONG</h4>
        </div>
        <div className="social-icons">
          <a href="https://wa.me/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.icon.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.icon.svg" alt="Instagram" />
          </a>
          </div>
        </div>

        <div className="footer-accordion">
          {links.map((link, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{link.label}</span>
                <span>+</span>
              </div>
              {openIndex === index && (
                <div className="accordion-body">
                  <a href={link.url}>{link.url}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">
          © 2025 Dink Sports Venture Pvt Ltd
        </p>
        <p className="footer-dev">
          Developed by <a href="https://ewebnetwork.in" target="_blank" rel="noopener noreferrer">ewebnetwork.in</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
