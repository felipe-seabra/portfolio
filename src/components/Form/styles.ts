import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .form {
    color: #101010;
    display: flex;
    flex-direction: column;
    min-width: 50vw;
  }

  .checkbox {
    color: ${(prop) => prop.theme.colors.text};
  }
`;
