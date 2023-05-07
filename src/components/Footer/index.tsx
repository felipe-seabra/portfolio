import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const SOCIAL_NETWORKS = [
  { url: 'https://github.com/felipe-seabra', iconClass: 'bx bxl-github' },
  { url: 'https://www.linkedin.com/in/felipe-seabra', iconClass: 'bx bxl-linkedin' },
  { url: 'https://www.instagram.com/felipeseabra_', iconClass: 'bx bxl-instagram' },
  { url: 'mailto:contato@felipeseabra.dev.br', iconClass: 'bx bx-envelope' }
];

function Footer() {
  return (
    <Container>
      <footer>
        <div className="social-networks">
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
        </div>
        <div>Felipe S. - &copy; 2022</div>
      </footer>
    </Container>
  );
}

export default Footer;
