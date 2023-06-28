import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = {};

  try {
    res.photo = await uploadPhoto();
    res.user = await createUser();
  } catch (error) {
    res.photo = null;
    res.user = null;
  }

  return res;
}
