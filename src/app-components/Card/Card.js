import React from 'react';
import { Container } from 'schofield-common-components';

export default function Card(props) {
  return (
    <Container theme={Object.assign((props.theme || {}), { display: 'flex', flexDirection: 'column' })} {...props}>
      { props.children }
    </Container>
  );
}

Card.defaultProps = {
  'data-testid': 'card-container'
}
