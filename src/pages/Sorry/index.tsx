import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';

import { Container } from './styles';
import AlertContactError from '../../components/AlertContactError';

function Sorry() {
  useEffect(() => {
    setPageTitle('Obrigado - Felipe Seabra');
  }, []);

  return (
    <Container>
      <AlertContactError />
    </Container>
  );
}

export default Sorry;
