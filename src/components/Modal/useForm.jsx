import { useState } from 'react';

const useForm = (initialValue, validationConfig) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isNoError, setIsNoError] = useState(false);

  const handleChange = (name, event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (validationConfig) {
      let valid = true;
      const newErrors = {};
      for (const key in validationConfig) {
        const value = values[key];
        const validation = validationConfig[key];
        const pattern = validation.pattern;

        if (pattern.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const rule = validation.rules;

        if (rule.isValid && !rule.isValid(value)) {
          valid = false;
          newErrors[key] = rule.message;
        }
      }
      valid ? setIsNoError(true) : setErrors(newErrors);
    }
  };

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isNoError,
  };
};

export default useForm;
