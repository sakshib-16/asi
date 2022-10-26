export const nameValidate = (name) => {
  console.log(name);
  if (name !== "") {
    const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const check = name?.match(re);
    if (check !== null) return true;
  }

  return false;
};

export const phoneValidate = (phone) => {
  const ph = /^((?!(0))[0-9]{10})$/;
  const checkphone = phone?.match(ph);
  if (checkphone !== null) return true;
  return false;
};

export const emailValidate = (email) => {
  const em = /(?<=@)[^.]+(?=\.)/;
  const checkemail = email?.match(em);
  if (checkemail !== null) return true;
  return false;
};
export const passwordValidate = (password) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
  const check = password?.match(re);
  if (check !== null) return true;
  return false;
};
