import React from "react";
function Footer() {
  return (
    <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
      By Jeanoza at {new Date().getUTCFullYear()}
    </div>
  );
}

export default Footer;
