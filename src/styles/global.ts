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
    font-family: 'Josefin Sans', sans-serif;;
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

  #hero {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100vw;
    height: 100vh;
  }
`;
