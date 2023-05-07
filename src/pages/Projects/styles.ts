import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    text-align: center;
  }

  .projects__card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    flex-wrap: wrap;
  }
`;
