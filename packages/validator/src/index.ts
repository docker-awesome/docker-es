import type { DataType, IsType } from './index.d';

class Validator {
  static #regexp_idcard =
    /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/;
  static isIdentityCard = (id: string) => {
    if (!id || !this.#regexp_idcard.test(id)) return false;
    let sum = 0;
    for (let index = 0; index < 17; index++) {
      sum += (Math.pow(2, 17 - index) % 11) * (id.charCodeAt(index) - 48);
    }
    const num = (12 - (sum % 11)) % 11;
    if (num < 10) return num === parseInt(id.charAt(17), 10);
    return id.charAt(17).toUpperCase() === 'X';
  };

  static #regexp_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*+,-.@])[a-zA-Z0-9!#$%&*+,-.@]{8,16}$/;
  static isStrongPassword = (pwd: string) => this.#regexp_password.test(pwd);

  static #regexp_integer = /^[-+]?\d*$/;
  static isInt = (num: string | number) => this.#regexp_integer.test(`${num}`);

  static #regexp_decimal = /^[-\+]?\d+\.\d+$/;
  static isDecimal = (num: string | number) =>
    this.#regexp_decimal.test(`${num}`);

  static isEmpty = (source: any): boolean =>
    [Object, Array].includes((source || {}).constructor) &&
    !Object.entries(source || {}).length;

  static isType: IsType = (args: any, comparison?: DataType) => {
    const type = Object.prototype.toString
      .call(args)
      .slice(8, -1)
      .toLowerCase();
    if (comparison) return type === comparison;
    return type;
  };

  static isArray = (args: any) => this.isType(args, 'array');
  static isString = (args: any) => this.isType(args, 'string');
  static isBoolean = (args: any) => this.isType(args, 'boolean');
  static isNumber = (args: any) => this.isType(args, 'number');
}

export default Validator;
