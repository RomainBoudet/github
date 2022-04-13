// import npm
import React from 'react';
import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// import style
import './style.scss';

// import react

const Footer = ({ propsFooter }) => (
  <footer className="footer">
    <a className="mylink" href="https://romainboudet.fr">
      <span className="copyright"> Ⓒ Romain Boudet - {propsFooter} </span>
    </a>
  </footer>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Footer.propTypes = {
  propsFooter: PropTypes.number.isRequired,
};

export default Footer;
