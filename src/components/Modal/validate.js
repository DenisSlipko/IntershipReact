export default function validate(values) {
  let errors = {};
  if (values.name.length > 10) {
    errors.name = 'Name is invalid, max 10 characters';
  }
  if (values.iso3.length > 3) {
    errors.iso3 = 'Password must be 3 or less characters';
  }
  if (!/^[+]\d+$/.test(values.phone_code)) {
    errors.phone_code = 'Phonecode must be 3 or more characters';
  }
  if (values.currency.length > 3) {
    errors.currency = 'Currency must be 3 or less characters';
  }
  if (values.capital.length < 3) {
    errors.capital = 'Password must be 3 or more characters';
  }
  return errors;
}
