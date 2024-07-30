import { Storage } from '../../utils/storage';

export const useStorage: () => typeof Storage = () => {
  return Storage;
};
