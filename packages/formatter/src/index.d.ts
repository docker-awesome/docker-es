export default class Formatter {
  static digit: ({
    number,
    locales,
    options
  }: {
    number: number;
    locales?: Intl.LocalesArgument;
    options?: Intl.NumberFormatOptions;
  }) => string;

  static currency: ({
    number,
    locales,
    options
  }: {
    number: number;
    locales?: Intl.LocalesArgument;
    options?: Intl.NumberFormatOptions;
  }) => string;
}
