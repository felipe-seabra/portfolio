import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Container } from './styles';
import { AppContext } from '../../context/Provider';
import ContactElements from '../ContactElements';

function AlertContactSucess() {
  const { submitForm } = useContext(AppContext);
  return !submitForm ? (
    <Navigate to="/contato" />
  ) : (
    <Container>
      <div className="mt-5 text-center">
        <Alert variant="success" className="container">
          <Alert.Heading>Enviado com sucesso!</Alert.Heading>
          <p>
            Agradecemos o seu contato e ficamos muito felizes em saber do seu interesse em
            nossos <em>cursos</em>
            .
            <br />
          </p>
          <p>Esperamos que sua experiência conosco supere as suas expectativas.</p>
          <p className="mb-0">Retornaremos em breve.</p>
        </Alert>
        <div className="container-fluid mt-5">
          <Link to="/" className="global-btn">
            Voltar
          </Link>
        </div>
        <div className="mt-5">
          <ContactElements />
        </div>
      </div>
    </Container>
  );
}

export default AlertContactSucess;
