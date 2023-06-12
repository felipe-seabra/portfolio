import styled from 'styled-components';

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;

  .about__picture {
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary};
  }

  .talk-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.secundary};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
  }

  .talk-btn:hover {
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secundary};
  }

  .talk-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.secundary};
    z-index: -1;
    transition: 0.5s;
  }

  .talk-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }

  @media screen and (max-width: 990px) {
    .about__picture {
      margin-top: 7rem;
      max-width: 280px !important;
    }

    h2 {
      font-size: 2.5em;
      text-align: center;
    }
  }
`;

export const AboutText = styled.div`
  width: 590px;
  margin-top: 2rem;

  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;
