import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Inter, sans-serif;
    font-size: 72px;
    font-weight: 900;
    max-width: 940px;
    text-align: center;
    line-height: 120%;
    letter-spacing: -0.75px;

    position: relative;
    z-index: 10;
  }
`;
