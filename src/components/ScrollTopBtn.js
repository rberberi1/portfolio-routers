import React, { useState, useEffect } from 'react';

function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none', 
      }}
    >
      Scroll to Top
    </button>
  );
}

export default ScrollTopBtn;
