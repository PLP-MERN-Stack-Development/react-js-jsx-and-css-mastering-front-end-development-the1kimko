import React from 'react';

const Footer = () => (
  <footer className="footer footer-center p-4 bg-base-200 text-base-content">
    <aside>
      <p>© {new Date().getFullYear()} PLP Task Manager. All rights reserved.</p>
    </aside>
  </footer>
);

export default Footer;
