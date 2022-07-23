import { BASE_URL } from 'constants/api';

export const getProfile = (filename) => {
  return `${BASE_URL}/uploads/profiles/${filename}`;
};
export const getVideo = (filename) => {
  return `${BASE_URL}/uploads/videos/${filename}`;
};
