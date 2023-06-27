export default function signUpUser(firstName, lastName) {
  const signUp = new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
    reject(new Error());
  });

  return signUp;
}
