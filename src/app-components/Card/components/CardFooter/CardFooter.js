import React from 'react';
import { Container } from 'schofield-common-components';

export default function CardFooter(props) {
  return (
    <Container theme={Object.assign((props.theme || {}), { height: '20%', width: '100%' })} {...props}>
      { props.children }
    </Container>
  );
}

CardFooter.defaultProps = {
  'data-testid': 'cardfooter-container'
}
