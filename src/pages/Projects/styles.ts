import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const PojectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1800px;
  flex-wrap: wrap;
`;
