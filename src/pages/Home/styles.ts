import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);

  h1 {
    font-size: 72px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.75px;

    position: relative;
    z-index: 10;
  }

  #animate-flicker {
    margin-left: 1vw;
    color: ${(props) => props.theme.colors.text};
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  #animate-flicker {
    -webkit-animation: flickerAnimation 1s infinite;
    -moz-animation: flickerAnimation 1s infinite;
    -o-animation: flickerAnimation 1s infinite;
    animation: flickerAnimation 1s infinite;
  }
`;
