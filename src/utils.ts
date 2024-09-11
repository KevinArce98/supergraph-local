import jwt_decode from 'jwt-decode';

export const getToken = (authorization: string) => {
  if (!authorization) {
    return null;
  }
  return authorization.split(' ')[1];
};

export const getUserId = (authorization: string) => {
  // used only to get the user id from the token for session cache (does not verify the token)
  const token = getToken(authorization);
  if (!token || token === '') {
    return null;
  }

  const decoded: any = jwt_decode(token);
  return decoded.name;
};
