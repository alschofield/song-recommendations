import React, { useState, useCallback } from 'react';
import { Container } from 'schofield-common-components';

export default function CardBody(props) {
  const [hover, updateHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    updateHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    updateHover(false)
  }, [])

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} theme={props.theme} {...props}>
      <Container theme={{
        display: (hover) ? 'block' : 'none',
        pointerEvents: 'none',
        zIndex: '2',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.9) 95%, rgba(0, 0, 0, 1.0) 100%)'
      }}></Container>
      { props.children }
    </Container>
  );
}

CardBody.defaultProps = {
  'data-testid': 'cardbody-container'
}
