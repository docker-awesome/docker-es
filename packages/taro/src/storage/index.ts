import Base64 from '@docker-es/base64';
import {
  clearStorageSync,
  getStorageInfoSync,
  getStorageSync,
  removeStorageSync,
  setStorageSync
} from '@tarojs/taro';

export default class Storage {
  static clear = () => {
    try {
      clearStorageSync();
      return true;
    } catch (e) {
      // Do something when catch error
      return false;
    }
  };

  static remove = (key: string) => {
    try {
      removeStorageSync(Base64.encode(key));
      return true;
    } catch (e) {
      console.error(e);
      // Do something when catch error
      return false;
    }
  };

  static set = (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => {
    try {
      const { expires } = options || {};
      setStorageSync(
        Base64.encode(key),
        Base64.encode(
          JSON.stringify({
            data: value,
            timestamp: Date.now(),
            expires
          })
        )
      );
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  static get = (key: string = '') => {
    try {
      const code = getStorageSync(Base64.encode(key));
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
    } catch (e) {
      console.error(e);
      // Do something when catch error
      return null;
    }
  };

  static info = () => {
    try {
      const res = getStorageInfoSync();
      return res;
    } catch (e) {
      console.error(e);
      // Do something when catch error
      return null;
    }
  };
}
