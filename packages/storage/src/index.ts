import Base64 from '@docker-es/base64';
import type { Session, Storage } from './index.d';

/**
 * Storage：
 * clear(): void; 清空本地存储
 * remove(key: string): void; 移除指定存储
 * set(key: string, value: any): void; 设置本地存储
 * get(key: string): any; 获取本地存储
 */
class StorageImpl implements Storage {
  static clear = () => {
    window.localStorage.clear();
  };

  static remove = (key: string) => {
    window.localStorage.removeItem(Base64.encode(key));
  };

  static set = (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => {
    const { expires } = options || {};

    window.localStorage.setItem(
      Base64.encode(key),
      Base64.encode(
        JSON.stringify({
          data: value,
          timestamp: Date.now(),
          expires
        })
      )
    );
  };

  static get = (key: string = '') => {
    const code = window.localStorage.getItem(Base64.encode(key));

    if (code) {
      const storage = JSON.parse(Base64.decode(code) || JSON.stringify({}));
      const { data, timestamp, expires } = storage || {};

      if (!expires) return data;

      // 缓存过期, 移除并返回空值
      if (Date.now() - timestamp >= expires) {
        this.remove(key);
        return null;
      }

      return data;
    }

    return code;
  };

  static key = (index: number) => {
    return window.localStorage.key(index);
  };

  static count = () => {
    return window.localStorage.length;
  };

  static listen = (callback: (e: StorageEvent) => void) => {
    window.addEventListener('storage', callback);

    // unlisten
    return () => {
      window.removeEventListener('storage', callback);
    };
  };
}

/**
 * Session:
 * clear(): void; 清空本地存储
 * remove(key: string): void; 移除指定存储
 * set(key: string, value: any): void; 设置本地存储
 * get(key: string): any; 获取本地存储
 */
class SessionImpl implements Session {
  static clear = () => {
    window.sessionStorage.clear();
  };

  static remove = (key: string) => {
    window.sessionStorage.removeItem(Base64.encode(key));
  };

  static set = (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => {
    const { expires } = options || {};

    window.sessionStorage.setItem(
      Base64.encode(key),
      Base64.encode(
        JSON.stringify({
          data: value,
          timestamp: Date.now(),
          expires
        })
      )
    );
  };

  static get = (key: string = '') => {
    const code = window.sessionStorage.getItem(Base64.encode(key));

    if (code) {
      const storage = JSON.parse(Base64.decode(code) || JSON.stringify({}));
      const { data, timestamp, expires } = storage || {};

      if (!expires) return data;

      // 缓存过期, 移除并返回空值
      if (Date.now() - timestamp >= expires) {
        this.remove(key);
        return null;
      }

      return data;
    }

    return code;
  };

  static key = (index: number) => {
    return window.sessionStorage.key(index);
  };

  static count = () => {
    return window.sessionStorage.length;
  };

  static listen = (callback: (e: StorageEvent) => void) => {
    window.addEventListener('storage', callback);

    // unlisten
    return () => {
      window.removeEventListener('storage', callback);
    };
  };
}

export { SessionImpl as Session, StorageImpl as Storage };
