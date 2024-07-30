export default class Base64 {
  static encode: (str: string, safe?: boolean) => string;
  static decode: (str: string) => string;
}
