import React from 'react';

import { Container, Text } from './styles';

interface LoadingProps {
  text?: string;
}

function Loading({ text = '' }: LoadingProps): JSX.Element {
  return (
    <Container>
      {text && <Text>{text}</Text>}
      <div className="container dots-flow" />
    </Container>
  );
}

Loading.defaultProps = {
  text: ''
};

export default Loading;
