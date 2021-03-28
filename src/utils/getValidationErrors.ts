import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export function getValidationErros(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(errors => {
    validationErrors[String(errors.path)] = error.message;
  });

  return validationErrors;
}
