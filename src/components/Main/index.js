// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Noresult from './noResults';
import MyCard from './Card';
import Spinner from '../Spinner';

// import style
import './style.scss';

// import react

const Main = ({ data, loading }) => (
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
      <Card.Group centered itemsPerRow={3}>
        {
        data.map((item) => (
          <MyCard
            key={item.id}
            {...item}
            description={item.description ? item.description : ''}
          />
        ))
    }
      </Card.Group>
    )

  }

  </main>
);

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  })),
  loading: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  data: undefined,
};

export default Main;
