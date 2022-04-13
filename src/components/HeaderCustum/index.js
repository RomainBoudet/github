// import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Image, Grid, Header, Segment,
} from 'semantic-ui-react';

// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react
import githubLogo from './logo-github.png';
import romLogo from './RB.png';

const HeaderCustum = () => (
  <Header>
    <div className="container-logo">
      <Image
        className="logo"
        src={githubLogo}
        as="a"
        size="small"
        href="https://github.com/RomainBoudet/github"
        target="_blank"
        centered
      />
      <Image
        className="logo rom"
        src={romLogo}
        as="a"
        size="small"
        href="https://romainboudet.fr/"
        target="_blank"
        centered
      />
    </div>

    {/* ici ma search bar ! */}
    <Segment
      raised
    >
      <Input
        className="input"
        fluid
        action={{ icon: 'search' }}
        placeholder="Rechercher un repo..."
        size="large"
      />
    </Segment>
    <Segment
      raised
      className="mysegment"
    >Le résultat de ma recherche
    </Segment>
  </Header>
);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

/* Header.propTypes = {
  propsHeader: PropTypes.string.isRequired,
}; */

export default HeaderCustum;
