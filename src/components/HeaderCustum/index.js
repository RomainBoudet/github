// import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Image, Header, Segment,
} from 'semantic-ui-react';

// import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

// import style
import './style.scss';

// import react
import githubLogo from './logo-github.png';
import romLogo from './RB.png';

const HeaderCustum = ({
  inputSearch, onSubmit, onChange, loading, count,
}) => (
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
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit();
      }}
      >
        <Input
          fluid
          loading={loading}
          className="input"
          action={{ icon: 'search' }}
          placeholder="Rechercher un repo..."
          size="large"
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
    >{count ? `La recherche a donné ${count} résultats.` : 'Effectuez une recherche pour connaitre le nombre de résultat...'}
    </Segment>
  </Header>
);

HeaderCustum.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  count: PropTypes.number,
};

HeaderCustum.defaultProps = {
  count: 0,
};

export default HeaderCustum;
