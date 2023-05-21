import React, { useEffect } from 'react';

import { Container } from './styles';
import setPageTitle from '../../utils/setPageTitle';

function Home() {
  useEffect(() => {
    setPageTitle('Felipe Seabra - Desenvolvedor Web Full-Stack');
    window.navigator.vibrate(300);
  }, []);

  return (
    <Container>
      <div>
        <h4>Olá, meu nome é</h4>
        <h1>
          Felipe <span>Seabra</span>
          <span id="animate-flicker">|</span>
        </h1>
        <h3>Desenvolvedor Web Full-Stack.</h3>
      </div>
    </Container>
  );
}

export default Home;
