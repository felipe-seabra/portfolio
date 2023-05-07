import React from 'react';
import CookieConsent from 'react-cookie-consent';

import { Container } from './styles';

const COOKIE_STYLE: React.CSSProperties = {
  background: '#101010',
  textAlign: 'left',
  fontSize: '16px',
  padding: '20px'
};

function CookieConsentComponent(): JSX.Element {
  return (
    <Container>
      <CookieConsent
        cookieName="felipeCookie"
        style={COOKIE_STYLE}
        buttonText="Aceitar"
        expires={30}
        buttonClasses="cookie-btn">
        &#34;Este site utiliza cookies para seu adequado funcionamento, análises,
        personalização e publicidade. Ao continuar navegando neste site você declara estar
        ciente destas condições.&#34;
      </CookieConsent>
    </Container>
  );
}

export default CookieConsentComponent;
