export const validator = (value, max, min) => {
  if (value.length >= min && value.length <= max) {
    return true;
  }
};
