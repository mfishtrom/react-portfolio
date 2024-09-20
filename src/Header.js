import logo from "./NewLogo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

function collapse() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Header() {
  return (
    <header>
      <ul>
          <section className="topnav" id="myTopnav">
              <a href="javascript:void(0);"><li className="icon" onClick={collapse}>
                  <img src={logo} alt="MA Design Logo in Black Art Deco Font." className="logo"></img>
              </li></a>
              <NavLink to="/" className="link1"><li>Home</li></NavLink>
              <NavLink to="/research" className="link2"><li>Research</li></NavLink>
              <NavLink to="/graphic" className="link3"><li>Graphic Design</li></NavLink>
              <NavLink to="/projectmanagement" className="link4"><li>Project Management</li></NavLink>
              <NavLink to="/webdesign" className="link5"><li>Web Design</li></NavLink>
              <NavLink to="/other" className="link6"><li>Other</li></NavLink>
          </section>
      </ul>
  </header>
  );
}

export default Header;
