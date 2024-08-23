import type { ArrayFromParameter, DataType } from './index.d';

class Getter {
  static count = (data: ArrayFromParameter) => Array.from(data).length;

  static uuid = (): string => Math.random().toString(36).slice(2);

  static type = (data: any): DataType =>
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() as DataType;

  static round = (number: number, precision: number = 2): number =>
    Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision;

  static random = (
    from: number,
    to: number,
    isInteger: boolean = true
  ): number => {
    const [max, min] = [Math.max(from, to), Math.min(from, to)];
    return isInteger
      ? Math.floor(Math.random() * (max - min + 1) + min)
      : Math.random() * (max - min) + min;
  };

  static jsonp = async (url: string, params?: Record<string, any>) => {
    return new Promise<any>((resolve, reject) => {
      let i = 0;
      while (window[`__JSONP_CALLBACK_${i}__`]) i++;

      const callback = `__JSONP_CALLBACK_${i}__`;
      const search = new URLSearchParams({ ...(params || {}), callback });

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `${url}?${search}`;
      script.onerror = (error) => {
        reset();
        reject(error);
      };

      const reset = () => {
        script.remove();
        delete window[callback];
      };

      window[callback] = (res: any) => {
        reset();
        resolve(res);
      };

      document.head.appendChild(script);
    });
  };
}

export default Getter;
