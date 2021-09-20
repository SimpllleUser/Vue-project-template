import SecureLS from 'secure-ls';

const secureLocalStorage = new SecureLS({
  encodingType: 'Base64',
  isCompression: true,
  encryptionSecret: 'secret-key',
  encryptionNamespace: null,
});

export const getItem = (key) => JSON.parse(secureLocalStorage.get(key));
export const setItem = (key, body) => {
  const isValidArguments = key.trim().length && body.length;
  if (!isValidArguments) return undefined;
  return secureLocalStorage.set(key, JSON.stringify(body));
};
export const cleanItem = (key) => {
  if (!key) return undefined;
  secureLocalStorage.set(key, '');
  return true;
};
export const deleteItem = (key) => {
  if (!key) return undefined;
  secureLocalStorage.remove(key);
  return true;
};
