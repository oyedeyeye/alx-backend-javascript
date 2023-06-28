import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const resultArr = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          resultArr.push(result);
        } else {
          resultArr.push({
            status: result.status,
            value: `Error: ${result.reason.message}`,
          });
        }
      });

      return resultArr;
    })
    .catch(() => new Error());
}
