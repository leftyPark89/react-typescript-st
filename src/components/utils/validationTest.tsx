export const validateEmail = (email:string) => {
  const validAdress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validAdress.test(email);
}

export const validatePw = (password: string) => {
  return password.length >= 8;
}