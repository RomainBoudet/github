// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from 'semantic-ui-react';
import Noresult from './noResults';
import MyCard from './Card';
import Spinner from '../Spinner';

// import style
import './style.scss';

// import react

const Main = ({ data, loading }) => (
  <main>
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
    <Grid container columns={3}>
      <Card.Group>
        {
        data.map((item) => (
          <MyCard
            key={item.id}
            {...item}
          />
        ))
    }
      </Card.Group>
    </Grid>
    )

  }

  </main>
);

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    unit: PropTypes.string,
  })),
  loading: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  data: undefined,
};

export default Main;
