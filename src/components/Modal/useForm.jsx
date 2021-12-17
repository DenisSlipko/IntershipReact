import { useState } from 'react';

const useForm = (country, validate, onChangeCountry) => {
  const [values, setValues] = useState({
    name: country.name,
    iso3: country.iso3,
    phone_code: country.phone_code,
    currency: country.currency,
    capital: country.capital,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));

    if (Object.keys(validate(values)).length === 0) {
      onChangeCountry(values, country.id);
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
