import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(firstName, lastName, fileName) {
  try {
    const [photoPromise, userPromise] = await Promise.all([
      uploadPhoto(fileName),
      createUser(firstName, lastName),
    ]);
    return {
      photo: photoPromise,
      user: userPromise,
    };
  } catch (err) {
    return {};
  }
}
