export const validate = (val) => {
  if (val !== null && val !== undefined && val.trim() !== '') {
    return true;
  } else {
    return false;
  }
};

export const isValidEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  }
  return false;
};
