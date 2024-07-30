import { Session, Storage } from '@docker-es/hub';

export const useStorage = () => {
  return {
    clear: Storage.clear,
    remove: Storage.remove,
    set: Storage.set,
    get: Storage.get,
    key: Storage.key,
    count: Storage.count,
    listen: Storage.listen
  };
};

export const useSession = () => {
  return {
    clear: Session.clear,
    remove: Session.remove,
    set: Session.set,
    get: Session.get,
    key: Session.key,
    count: Session.count,
    listen: Session.listen
  };
};
