import { useState } from 'react';

const useForm = (initialValue, validationConfig) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    if (validationConfig) {
      let valid = true;
      const newErrors = {};

      for (const key in validationConfig) {
        const value = values[key];
        const validation = validationConfig[key];

        if (validation.required && value.length === 0) {
          valid = false;
          newErrors[key] = validation.required;
        }

        if (validation.isValid && !validation.isValid(value)) {
          valid = false;
          newErrors[key] = validation.message;
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
    handleChange,
    values,
    errors,
  };
};

export default useForm;
