import React, { useContext, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Container } from './styles';
import { AppContext } from '../../context/Provider';

function AlertContactError() {
  const { submitForm } = useContext(AppContext);

  useEffect(() => {
    window.navigator.vibrate(500);
  }, []);

  return !submitForm ? (
    <Navigate to="/contact" />
  ) : (
    <Container>
      <div className="text-center">
        <Alert variant="warning" className="container">
          <Alert.Heading>Falha ao enviar!</Alert.Heading>
          <p>
            No momento, estamos enfrentando problemas internos e não é possível enviar o
            seu formulário. Pedimos desculpas pelo inconveniente. Por favor, entre em
            contato conosco por meio dos canais disponíveis abaixo.
            <br />
          </p>
          <p>Agradecemos sua compreensão e esperamos retornar em breve.</p>
        </Alert>
        <div className="mt-5">
          <Link to="/" className="global-btn">
            Voltar
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default AlertContactError;
