import { useSelector } from 'react-redux';

export const useAuthorize = (id) => {
  const myId = useSelector((state) => state?.user?.info?._id);

  return myId === id;
};
export const useAuthenticate = () => {
  const token = useSelector((state) => state?.user?.token);
  console.log(token);
  return !!token;
};
