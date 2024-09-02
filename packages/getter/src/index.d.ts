export type ArrayFromParameter = Parameters<typeof Array.from>[0];
export type PrimitiveType =
  | 'boolean'
  | 'null'
  | 'undefined'
  | 'number'
  | 'string'
  | 'symbol';
export type CompositeType = 'array' | 'object' | 'function' | 'date' | 'regexp';
export type DataType = PrimitiveType | CompositeType;

export default class Getter {
  static count: (data: ArrayFromParameter) => number;
  static uuid: () => string;
  static type: (data: any) => DataType;
  static round: (number: number, precision?: number) => number;
  static random: (from: number, to: number, integer?: boolean) => number;
  static clone<T>(data: T, isAsync?: false): T;
  static clone<T>(data: T, isAsync: true): Promise<T>;
  static jsonp: (url: string, params?: Record<string, any>) => Promise<any>;
}
