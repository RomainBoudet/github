// import npm
import React from 'react';
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// import style
import './style.scss';

// import react

const Footer = () => (
  <footer className="footer">
    <a className="mylink" href="https://romainboudet.fr">
      <span className="copyright"> Ⓒ Romain Boudet - {(new Date()).getFullYear()} </span>
    </a>
  </footer>

);


export default Footer;
