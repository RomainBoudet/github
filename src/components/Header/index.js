// import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Image, Segment,
} from 'semantic-ui-react';

// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react
import githubLogo from 'src/assets/image/logo-github.png';

const Header = ({
  inputSearch, onSubmit, onChange, loading, message,
}) => (
  <header>
    <div className="container-logo">
      <Image
        className="logo"
        src={githubLogo}
        as="a"
        size="medium"
        href="https://github.com/RomainBoudet/github"
        target="_blank"
        centered
        alt="logo github"
      />
    </div>

    {/* ici ma search bar ! */}
    <Segment
      raised
    >
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
      >
        <Input
          fluid
          iconPosition="left"
          loading={loading}
          icon="search"
          placeholder="Rechercher un repo..."
          value={inputSearch}
          onChange={(evt) => {
            onChange(evt.target.value);
          }}
        />
      </form>
      <small className="rappel"> Pour rappel, l'API Github n'autorise que 10 requetes par minutes (pour un client non identifié)...</small>
    </Segment>
    <Segment
      raised
      className="mysegment"
      content={message}
    />
  </header>
);

Header.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default Header;
