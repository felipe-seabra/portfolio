import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: Inter, sans-serif;
    position: relative;
    min-height: 100vh;
  }

  main {
    position: relative;
    min-height: 90vh;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.75px;

    position: relative;
    z-index: 10;
  }

  h2 {
    font-size: 4em;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  p {
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }

  span {
    color: ${(props) => props.theme.colors.secundary};
  }

  .global-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.secundary} !important;
    background: ${(props) => props.theme.colors.primary} !important;
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secundary} !important;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
  }

  .global-btn:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .global-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.secundary};
    z-index: -1;
    transition: 0.5s;
  }

  .global-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }
  
  .global-btn:disable {
    cursor: not-allowed;
  }

  #hero {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  .required-field {
    color: #E5625E;
    font-size: 0.7em;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    #hero {
      transform: translateX(-50%) translateY(-50%) rotate(90deg);
    }
  }
`;
