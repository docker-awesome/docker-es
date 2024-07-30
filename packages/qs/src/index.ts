import qs from 'qs';

class Qs {
  static stringify: typeof qs.stringify = (obj, options = {}) => {
    return qs.stringify(obj, {
      addQueryPrefix: true, // 添加 ?
      encoder: function (str) {
        return str;
      },
      ...(options || {})
    });
  };

  static parse: typeof qs.parse = (str: string, options: any = {}) => {
    return qs.parse(str, {
      ignoreQueryPrefix: true, // 忽略 ?
      decoder: ($str: string) => {
        return $str;
      },
      ...(options || {})
    });
  };
}

export default Qs;
