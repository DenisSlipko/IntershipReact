export const isDataMatch = (formData, backendData) => {
    if (
        formData.login === backendData.login &&
        formData.password === backendData.password
    ) {
      return true;
    } else {
      return false;
    }
  };