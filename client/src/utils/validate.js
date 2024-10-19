export const validateData = (name, email, password, mobile) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPassword =
    /^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "password is not valid";

  return "Success";
};
