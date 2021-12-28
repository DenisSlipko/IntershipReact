import { useState } from 'react';

export const required =
  (message = 'required') =>
  (value) => {
    if (!value && value !== false && value !== 0) {
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

const initialValues = (dataObject) => {
  const objectValues = {};

  for (const key in dataObject) {
    objectValues[key] = dataObject[key].value;
  }

  return objectValues;
};

const useForm = (dataObject) => {
  const initialObject = initialValues(dataObject);

  const [values, setValues] = useState(initialObject);
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
      const validation = dataObject[key];

      if (validation) {
        const errors = validation.validators.map((validator) => validator(value));

        for (let i = 0; i < errors.length; i++) {
          if (errors[i] !== null) {
            valid = false;
            newErrors[key] = errors[i];
          }
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
