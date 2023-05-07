import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;

  div {
    color: ${(props) => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
