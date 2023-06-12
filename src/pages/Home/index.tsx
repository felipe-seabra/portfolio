import React, { useEffect } from 'react';

import { Container, Pipe } from './styles';
import setPageTitle from '../../utils/setPageTitle';

function Home() {
  useEffect(() => {
    setPageTitle('Felipe Seabra - Desenvolvedor Web Full-Stack');
  }, []);

  return (
    <Container>
      <h4>Olá, meu nome é</h4>
      <h1>
        Felipe <span>Seabra</span>
        <Pipe>|</Pipe>
      </h1>
      <h3>Desenvolvedor Web Full-Stack.</h3>
    </Container>
  );
}

export default Home;
