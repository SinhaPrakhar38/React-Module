import React from "react";

function Footer() {
  const date = new Date();
  const CurrentYear = date.getFullYear();

  return (
    <footer>
      <p>Copyright ⓒ {CurrentYear}</p>
    </footer>
  );
}

export default Footer;
