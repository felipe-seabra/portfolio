import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;

  color: ${(props) => props.theme.colors.text};
`;
