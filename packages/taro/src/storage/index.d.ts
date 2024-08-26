export default class Storage {
  static clear: () => boolean;
  static remove: (key: string) => boolean;
  static set: (
    key: string,
    value: any,
    options?: {
      expires?: number;
    }
  ) => boolean;
  static get: (key: string) => any;
  static info: (key: string) => {
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number;
    /** 当前 storage 中所有的 key */
    keys: string[];
    /** 限制的空间大小，单位 KB */
    limitSize: number;
    /** 是否执行成功
     * @supported alipay
     */
    success?: boolean;
  };
}
