import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const MyCard = ({
  homepage, owner, html_url, name, full_name, description,
}) => (

  <Card centered>
    <Card.Content>
      <Image
        href={homepage}
        target="_blank"
        floated="right"
        size="mini"
        src={owner.avatar_url}
      />
      <Card.Header><a href={html_url} target="_blank" rel="noreferrer">{name}</a></Card.Header>
      <Card.Meta>{full_name}</Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>

);

MyCard.propTypes = {

  homepage: PropTypes.string,
  html_url: PropTypes.string,
  name: PropTypes.string.isRequired,
  full_name: PropTypes.string,
  description: PropTypes.string,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
  }),
};

MyCard.defaultProps = {
  homepage: "Absence d'homepage",
  html_url: 'Absence de lien',
  full_name: 'Absence de nom complet',
  description: 'Absence de description',
  owner: 'Absence de owner...',
};

export default MyCard;
