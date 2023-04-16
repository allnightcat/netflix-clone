import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

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

  const handlechange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="netflix_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        className="netfilx_logo"
      />
      <input
        value={searchValue}
        onChange={handlechange}
        className="nav-input"
        type="text"
        placeholder="영화를 검색해주세요."
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
