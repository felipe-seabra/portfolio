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
    font-family: Inter, sans-serif;;
  }

  main {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
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
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.secundary};
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
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100vw;
    height: 100vh;
  }
`;