import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="Footer">
      <p>Copywrite &copy; {date.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
