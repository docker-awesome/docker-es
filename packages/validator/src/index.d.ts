export type DataType =
  | 'boolean'
  | 'null'
  | 'undefined'
  | 'number'
  | 'string'
  | 'symbol'
  | 'array'
  | 'object'
  | 'function'
  | 'date'
  | 'regexp';

function isType(args: any): DataType;
function isType(args: any, comparison: DataType): boolean;

export type IsType = typeof isType;

export default class Validator {
  static isIdentityCard: (id: string) => boolean;
  static isStrongPassword: (pwd: string) => boolean;
  static isInt: (num: string | number) => boolean;
  static isDecimal: (num: string | number) => boolean;
  static isEmpty: (source: any) => boolean;
  static isType: IsType;
  static isArray: (args: any) => boolean;
  static isString: (args: any) => boolean;
  static isBoolean: (args: any) => boolean;
  static isNumber: (args: any) => boolean;
}
