import { useState } from 'react';

export const required = (message) => (value) => {
  if (!value) {
    return message;
  }
  return null;
};

export const maxValue = (quantity) => (value) => {
  if (value.length > quantity) {
    return `Need less than ${quantity} characters`;
  }
  return null;
};

export const minValue = (quantity) => (value) => {
  if (value.length < quantity) {
    return `Need more than ${quantity} characters`;
  }
  return null;
};

const useForm = (dataObject) => {
  let objectValues = {};

  for (const key in dataObject) {
    if (key !== 'id') {
      objectValues[key] = dataObject[key].value;
    }
  }
  const [values, setValues] = useState(objectValues);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (name) => (value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    if (dataObject) {
      let valid = true;
      const newErrors = {};

      for (const key in dataObject) {
        const value = values[key];
        const validation = dataObject[key];

        const errors = validation.validators.map((validator) => validator(value));

        for (let i = 0; i < errors.length; i++) {
          if (errors[i] !== null) {
            valid = false;
            newErrors[key] = errors[i];
          }
        }
      }

      if (!valid) {
        setErrors(newErrors);
      }
      return valid;
    } else {
      return true;
    }
  };

  return {
    validate,
    handleFieldChange,
    values,
    errors,
  };
};

export default useForm;
