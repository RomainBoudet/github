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
        {
        data.map((item) => (
          <Card centered>
            <Card.Content>
              <Image
                href={item.homepage}
                target="_blank"
                floated="right"
                size="mini"
                src={item.owner.avatar_url}
              />
              <Card.Header><a href={item.html_url}>{item.name}</a></Card.Header>
              <Card.Meta>{item.full_name}</Card.Meta>
              <Card.Description>
                {item.description}
              </Card.Description>
            </Card.Content>
          </Card>
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
