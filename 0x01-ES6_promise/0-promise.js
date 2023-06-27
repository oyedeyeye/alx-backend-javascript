export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo');
    }, 10);
  });
  return myPromise;
}
