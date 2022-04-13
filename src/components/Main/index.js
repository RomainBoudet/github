// import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image } from 'semantic-ui-react';
// import { Routes, Route, Outlet, Link } from "react-router-dom";

// import style
import './style.scss';

// import react

const Main = () => (
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
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/molly.png"
          />
          <Card.Header>Molly Thomas</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Molly wants to add you to the group <strong>musicians</strong>
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/jenny.jpg"
          />
          <Card.Header>Jenny Lawrence</Card.Header>
          <Card.Meta>New User</Card.Meta>
          <Card.Description>
            Jenny requested permission to view your contact details
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </Grid>

);

/* Exmaple.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    myFunction: PropTypes.func.isRequired,
  })).isRequired,
}; */

/* Main.propTypes = {
  propsMain: PropTypes.string.isRequired,
};
 */
export default Main;
