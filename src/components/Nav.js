import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        className="netfilx_logo"
      />
      <img
        alt="user_image"
        src="https://wallpapers.com/images/file/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
        className="user_image"
      />
    </nav>
  );
}

export default Nav;
