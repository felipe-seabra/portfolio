import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: absolute;
  top: 55%;
  left: 5%;
  transform: translateY(-50%);
`;

export const Pipe = styled.span`
  margin-left: 1vw;
  color: ${(props) => props.theme.colors.text};

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

  -webkit-animation: flickerAnimation 1s infinite;
  -moz-animation: flickerAnimation 1s infinite;
  -o-animation: flickerAnimation 1s infinite;
  animation: flickerAnimation 1s infinite;
`;
