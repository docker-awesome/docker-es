type ListenCancel = () => void;
type ListenCallback = (e: StorageEvent) => void;

class WebStorage {
  static clear: () => void;
  static remove: (key: string) => void;
  static set: (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => void;
  static get: (key: string) => void;
  static key: (index: number) => string | null;
  static count: () => number;
  static listen: (callback: ListenCallback) => ListenCancel;
}

class LocalStorage extends WebStorage {}
class SessionStorage extends WebStorage {}

export { SessionStorage as Session, LocalStorage as Storage };
