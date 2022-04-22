// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Noresult from './noResults';
import MyCard from './Card';
import Spinner from '../Spinner';

// import style
import './style.scss';

// import react

const Main = ({
  data, loading, inputSearch, showMoreRepo,
}) => (
  <main className="main">
    {
    // si loading ou data vaut undefined
    // On veut afficher une string
    loading && <Spinner />
  }
    {
    typeof data === 'undefined' && <Noresult />
  }
    {
    (!loading && typeof data !== 'undefined') && (

      data.map((item) => (
        <MyCard
          key={item.id}
          {...item}
          description={item.description ? item.description : ''}
        />
      )),
        <Button
          className="buttonmorerepo"
          fluid
          color="violet"
          loading={loading}
          disabled={!!((loading || inputSearch === ''))}
          size="large"
          content={`Afficher plus de repos ? (${data.length} résultats actuellement)`}
          icon="plus"
          onClick={showMoreRepo}
        />

    )

  }

  </main>
);

Main.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  inputSearch: PropTypes.string.isRequired,
  showMoreRepo: PropTypes.func.isRequired,
};

export default Main;
