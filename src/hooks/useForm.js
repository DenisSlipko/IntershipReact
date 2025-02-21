import { useState } from 'react';

export const required = (message = 'required') => (value) => {
    if (value === undefined && value === null) {
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
  if (value.length < quantity ) {
    return message ? message : `Need more than ${quantity} characters`;
  }

  return null;
};

const getInitialValues = (dataObject) => {
  return Object.keys(dataObject).reduce((acc, key) => ({
    ...acc,
    [key]: dataObject[key].value,
  }),{});
};

const useForm = (dataObject) => {
  
  const [values, setValues] = useState(getInitialValues(dataObject));
  const [errors, setErrors] = useState({});

  const handleFieldChange = (name) => (event) => {
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });
    
    validate();
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    for (const key in dataObject) {
      const value = values[key];
      const field = dataObject[key];

      if (field.validators) {
        const errors = field.validators.reduce((acc, validator) => { 
          const errorMessage = validator(value);
          return errorMessage ? [...acc , errorMessage] : acc
        },[])

        if (errors.length > 0) {
          valid = false;
          newErrors[key] = errors;
        } 
      }
    }

    if (!valid) {
      setErrors(newErrors);
    } else {
      setErrors({})
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
