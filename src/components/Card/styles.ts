import styled from 'styled-components';
// import { rgba, shade } from 'polished';

export const Container = styled.div`
  box-shadow: 0 0 30px ${(props) => props.theme.colors.cardBackground};
  background-color: ${(props) => props.theme.colors.cardBackground};
  transition: 0.4s ease;
  min-height: 430px;
  width: 335px;
  border-radius: 20px;
  margin: 15px;
  position: relative;
  overflow: hidden;
  text-align: center;

  .project__image {
    width: 100%;
    height: 170px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 1rem;
  }

  .show-more {
    appearance: none;
    background-color: ${(props) => props.theme.colors.cardBackground};
    color: ${(props) => props.theme.colors.text};
    border: none;
    text-decoration: underline;
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
  }

  .card-btn {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    border: 2px solid ${(props) => props.theme.colors.secundary} !important;
    background: ${(props) => props.theme.colors.primary} !important;
    border-radius: 8px;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.secundary} !important;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1rem;
    z-index: 1;
    overflow: hidden;
    text-transform: uppercase;
    transition: 0.5s;
  }

  .card-btn:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .card-btn::before {
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

  .card-btn:hover::before {
    width: 100%;
    transition: 0.5s;
  }

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin: 20px;

    .card-btn {
      font-size: 0.8em;
    }
  }
`;

export const CardBody = styled.div`
  padding: 1.08rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
