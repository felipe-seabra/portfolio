/* eslint-disable no-console */
import React, { useState, useContext, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form as BootstrapForm, Button, FloatingLabel } from 'react-bootstrap';
import { Container } from './styles';
import { AppContext } from '../../context/Provider';

import RequiredField from '../../helpers/RequiredField';

import verifyBtn, {
  verifyFieldName,
  verifyFieldEmail,
  verifyFieldMessage,
  verifyFieldCheckbox
} from '../../utils/verifyBtn';
import { IFormValues } from '../../interfaces';

function Form() {
  const { setSubmitForm, setErrorSubmitForm, setIsLoading } = useContext(AppContext);

  const [formValues, setFormValues] = useState<IFormValues>({
    name: '',
    email: '',
    message: '',
    checkbox: false
  });

  const handleFormSubmit = (): void => {
    setSubmitForm(true);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        'umbler',
        'template_0s5hb6j',
        e.target as HTMLFormElement,
        'pQs69XqnkBggTWGIR'
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        handleFormSubmit();
        setIsLoading(false);
      })
      .catch((error: EmailJSResponseStatus) => {
        console.log(error.text);
        setErrorSubmitForm(true);
        setIsLoading(false);
      });
  };

  const handleFormSubmitIsLoading = (e: FormEvent<HTMLFormElement>): void => {
    setIsLoading(true);
    sendEmail(e);
  };

  return (
    <Container>
      <div className="pt-5 mt-5 mb-5">
        <h2 className="text-center mb-4 pt-5">Contato</h2>
        <BootstrapForm className="form" onSubmit={handleFormSubmitIsLoading}>
          <>
            {/* input all name */}
            <RequiredField isValid={verifyFieldName(formValues.name)} />
            <FloatingLabel
              controlId="floatingInput"
              label="Nome completo*"
              className="mb-3">
              <BootstrapForm.Control
                type="text"
                placeholder="Nome completo"
                autoFocus
                value={formValues.name}
                name="name"
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                required
              />
            </FloatingLabel>
            <RequiredField isValid={verifyFieldEmail(formValues.email)} />
            <FloatingLabel controlId="floatingInput" label="E-mail*" className="mb-3">
              <BootstrapForm.Control
                type="email"
                placeholder="name@example.com"
                value={formValues.email}
                name="email"
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                required
              />
            </FloatingLabel>
            {/* input message */}
            <RequiredField isValid={verifyFieldMessage(formValues.message)} />
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Deixe sua mensagem aqui*"
              className="mb-3">
              <BootstrapForm.Control
                as="textarea"
                placeholder="Deixe sua mensagem aqui"
                style={{ height: '100px' }}
                value={formValues.message}
                name="message"
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </>
          {/* input checkbox */}
          <RequiredField isValid={verifyFieldCheckbox(formValues.checkbox)} />
          <BootstrapForm.Check
            label="Aceito enviar meus dados."
            className="mb-3 checkbox"
            type="checkbox"
            readOnly={formValues.checkbox}
            name="checkbox"
            onClick={() =>
              setFormValues({ ...formValues, checkbox: !formValues.checkbox })
            }
          />
          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            className="global-btn"
            value="Send"
            disabled={verifyBtn(formValues)}>
            Enviar
          </Button>
        </BootstrapForm>
      </div>
    </Container>
  );
}

export default Form;
