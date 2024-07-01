export const validateName = (name) => {
  const regex = /^[a-zA-Z]+$/i;
  return regex.test(name);
};
