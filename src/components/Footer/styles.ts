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

  .social-networks {
    display: flex;
  }

  .social-link {
    background-color: ${(props) => props.theme.colors.secundary};
    width: 40px;
    height: 40px;
    padding: 15px;
    border-radius: 50%;
    margin: 20px 5px 7px 5px;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    font-size: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: transform 0.4s;
  }

  .social-link:hover {
    color: ${(props) => props.theme.colors.text} !important;
    transform: scale(1.2);
  }
`;
