import React from 'react';
import { Container } from 'schofield-common-components';

export default function CardHeader(props) {
  return (
    <Container theme={Object.assign((props.theme || {}), { height: '20%', width: '100%' })} {...props}>
      { props.children }
    </Container>
  );
}

CardHeader.defaultProps = {
  'data-testid': 'cardheader-container'
}
