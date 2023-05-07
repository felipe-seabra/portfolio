import React from 'react';

import { Container } from './styles';

const linkEmail = 'mailto:contato@felipeseabra.dev.br';

function ContactElements() {
  return (
    <Container>
      <a href={linkEmail}>
        <i className="bx bx-envelope" />
      </a>
    </Container>
  );
}

export default ContactElements;
