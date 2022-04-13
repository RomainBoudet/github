// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image } from 'semantic-ui-react';
import Noresult from './noResults';
import Spinner from '../Spinner';

// import style
import './style.scss';

// import react

const Main = ({ data, loading }) => (
  <main>
    {console.log('data =>', data)}
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
        <Card centered>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
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
