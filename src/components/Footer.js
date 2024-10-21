import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer>
      <div className="social-media">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </div>
      <p>&copy; {currentYear} Rosela. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
