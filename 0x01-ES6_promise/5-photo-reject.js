export default function uploadPhoto(fileName) {
  const failedUpload = new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });

  return failedUpload;
}
