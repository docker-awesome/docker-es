import type { ArrayFromParameter, DataType } from './index.d';

class Getter {
  static count(data: ArrayFromParameter): number {
    return Array.from(data).length;
  }

  static id(options?: { prefix?: string; suffix?: string }): string {
    const { prefix = '', suffix = '' } = options || {};
    return `${prefix}${Math.random().toString(36).slice(2)}${suffix}`;
  }

  static uuid() {
    return crypto.randomUUID();
  }

  static type(data: any): DataType {
    return Object.prototype.toString
      .call(data)
      .slice(8, -1)
      .toLowerCase() as DataType;
  }

  static round(number: number, precision: number = 2): number {
    return (
      Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision
    );
  }

  static random(from: number, to: number, isInteger: boolean = true): number {
    const [max, min] = [Math.max(from, to), Math.min(from, to)];
    return isInteger
      ? Math.floor(Math.random() * (max - min + 1) + min)
      : Math.random() * (max - min) + min;
  }

  static clone(data: any /* , isAsync = false */) {
    /* if (isAsync) {
      return new Promise((resolve, reject) => {
        try {
          const { port1, port2 } = new MessageChannel();
          port1.onmessage = (e) => {
            resolve(e.data);
          };
          port2.postMessage(data);
        } catch (error) {
          reject(error);
        }
      });
    } */

    const objectMap = new Map();

    const deepClone = (value: any) => {
      if (value instanceof RegExp) return new RegExp(value);
      if (value instanceof Date) return new Date(value);
      if (value instanceof Map) return new Map(value);
      if (value instanceof Set) return new Set(value);

      const type = typeof value;
      if (type !== 'object' || type === null) return value;

      if (objectMap.has(value)) {
        return objectMap.get(value);
      }

      const result = Array.isArray(value) ? [] : {};
      objectMap.set(value, result);
      for (const key in value) {
        result[key] = deepClone(value[key]);
      }
      return result;
    };

    return deepClone(data);
  }

  static async jsonp(url: string, params?: Record<string, any>) {
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
  }
}

export default Getter;
