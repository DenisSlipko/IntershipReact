import { useState } from 'react';

export const required = (message = 'required') => (value) => {
    if (value === null && value === undefined) {
      return message;
    }

    return null;
  };

export const maxValue = (quantity, message) => (value) => {
  if (value.length > quantity) {
    return message ? message : `Need less than ${quantity} characters`;
  }

  return null;
};

export const minValue = (quantity, message) => (value) => {
  if (value.length < quantity) {
    return message ? message : `Need more than ${quantity} characters`;
  }

  return null;
};

const getInitialValues = (dataObject) => {
  const objectValues = {};

  for (const key in dataObject) {
    objectValues[key] = dataObject[key].value;
  }

  return objectValues;
};

const useForm = (dataObject) => {
  const [values, setValues] = useState(getInitialValues(dataObject));
  const [errors, setErrors] = useState({});

  const handleFieldChange = (name) => (value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    for (const key in dataObject) {
      const value = values[key];
      const field = dataObject[key];

      if (field.validators) {
        const errors = field.validators
        .filter((validator) => validator(value))
        .map((validator) => validator(value));

        if (errors.length > 0) {
          valid = false;
          newErrors[key] = errors;
        }
      }
    }

    if (!valid) {
      setErrors(newErrors);
    }

    return valid;
  };

  return {
    validate,
    handleFieldChange,
    values,
    errors,
  };
};

export default useForm;
