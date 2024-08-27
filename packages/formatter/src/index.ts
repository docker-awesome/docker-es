class Formatter {
  static digit = ({
    number,
    locales,
    options
  }: {
    number: number;
    locales?: Intl.LocalesArgument;
    options?: Intl.NumberFormatOptions;
  }) => {
    const { maximumFractionDigits = 2, minimumFractionDigits = 2 } =
      options || {};
    return new Intl.NumberFormat(locales, {
      minimumFractionDigits:
        Math.min(minimumFractionDigits, maximumFractionDigits) || 2,
      maximumFractionDigits:
        Math.max(minimumFractionDigits, maximumFractionDigits) || 2,
      ...(options || {})
    }).format(number);
  };

  static currency = ({
    number,
    locales,
    options
  }: {
    number: number;
    locales?: Intl.LocalesArgument;
    options?: Intl.NumberFormatOptions;
  }) => {
    return Formatter.digit({
      number,
      locales,
      options: {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'symbol',
        ...(options || {})
      }
    });
  };
}

export default Formatter;
