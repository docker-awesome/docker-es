class Validator {
  static isEmpty = (data: any): boolean =>
    [Object, Array].includes((data || {}).constructor) &&
    !Object.entries(data || {}).length;

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
}

export default Validator;
