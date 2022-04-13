// import npm
import React from 'react';
import PropTypes from 'prop-types';
// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react
import reactLogo from './react-logo.svg';
import romLogo from './RB.png';

const Header = ({ propsHeader }) => (
  <header>
    <img src={reactLogo} alt="react logo" />
    <img src={romLogo} alt="Romain Boudet logo" />
    <h1>Ho..., le beau front qu'on va faire en {propsHeader} </h1>
  </header>
);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

Header.propTypes = {
  propsHeader: PropTypes.string.isRequired,
};

export default Header;
