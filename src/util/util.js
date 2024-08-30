import CryptoJS from "crypto-js";
const secretekey = import.meta.env.VITE_SECRETETOKEN;

export const encryptToken = (token) => {
  const encryptiontoken = CryptoJS.AES.encrypt(token, secretekey);
  return encryptiontoken;
};

export const decryptToken = (token) => {
  const bytes = CryptoJS.AES.decrypt(token, secretekey);
  const decryptionsToken = bytes.toString(CryptoJS.enc.Utf8);
  return decryptionsToken;
};
