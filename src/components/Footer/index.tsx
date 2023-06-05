import React from 'react';

import { Link } from 'react-router-dom';
import { Container, SocialNetworks, TextToFooter } from './styles';

const SOCIAL_NETWORKS = [
  { url: 'https://github.com/felipe-seabra', iconClass: 'bx bxl-github' },
  { url: 'https://www.linkedin.com/in/felipe-seabra', iconClass: 'bx bxl-linkedin' },
  { url: 'https://www.instagram.com/felipeseabra_', iconClass: 'bx bxl-instagram' },
  { url: 'mailto:contato@felipeseabra.dev.br', iconClass: 'bx bx-envelope' }
];

function Footer() {
  return (
    <Container>
      <SocialNetworks>
        {SOCIAL_NETWORKS.map((network) => (
          <Link
            target="_blank"
            to={network.url}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            className="social-link">
            <i className={network.iconClass} />
          </Link>
        ))}
      </SocialNetworks>
      <TextToFooter>Felipe S. - &copy; 2022</TextToFooter>
    </Container>
  );
}

export default Footer;
