import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;

  .about__picture {
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 3px 3px ${(props) => props.theme.colors.secundary};
  }

  .about__text {
    width: 590px;
  }

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 4em;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }

  .talk-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 100%;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-radius: 8px;
    font-size: 1.2rem;
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
      max-width: 280px !important;
    }

    .about__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
    }

    h2 {
      font-size: 2.5em;
      text-align: center;
    }
  }
`;
