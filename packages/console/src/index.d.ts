export default class Console {
  static print: (...args: any[]) => void;
  static output: (label: string, value: string, color: string) => void;
  static info: (label: string, value: any) => void;
  static error: (label: string, value: any) => void;
  static warn: (label: string, value: any) => void;
  static success: (label: string, value: any) => void;
}
