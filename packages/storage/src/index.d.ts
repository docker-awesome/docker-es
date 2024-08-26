type ListenCancel = () => void;
type ListenCallback = (e: StorageEvent) => void;

declare class WebStorage {
  static clear: () => void;
  static remove: (key: string) => void;
  static set: (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => void;
  static get: (key: string) => any;
  static key: (index: number) => string | null;
  static count: () => number;
  static listen: (callback: ListenCallback) => ListenCancel;
}

declare class LocalStorage extends WebStorage {}
declare class SessionStorage extends WebStorage {}

export { SessionStorage as Session, LocalStorage as Storage };
