import { IFormValues } from '../interfaces';

const num = 3;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const verifyBtn = (formValues: IFormValues) => {
  const { name, email, message, checkbox } = formValues;
  return !(
    name.length >= num &&
    emailRegex.test(email) &&
    message.length > num &&
    checkbox === true
  );
};

export const verifyFieldName = (name: string) => name.length >= num;

export const verifyFieldEmail = (email: string) => emailRegex.test(email);

export const verifyFieldMessage = (message: string) => message.length > num;

export const verifyFieldCheckbox = (checkbox: boolean) => checkbox === true;

export default verifyBtn;
