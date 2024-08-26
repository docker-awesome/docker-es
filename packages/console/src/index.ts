class Console {
  static print = (...args: any[]) => {
    console.log.apply(null, args);
  };

  static output = (label: string, value: string, color: string) => {
    console.log(
      `%c ${label} %c ${value} `,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`
    );
  };

  static info = (label: string, value: any) => {
    this.output(
      label,
      typeof value === 'object' ? JSON.stringify(value) : value,
      'rgba(0, 0, 0, 0.25)'
    );
  };

  static error = (label: string, value: any) => {
    this.output(
      label,
      value && typeof value === 'object' ? JSON.stringify(value) : value,
      '#ff4d4f'
    );
  };

  static warn = (label: string, value: any) => {
    this.output(
      label,
      value && typeof value === 'object' ? JSON.stringify(value) : value,
      '#faad14'
    );
  };

  static success = (label: string, value: any) => {
    this.output(
      label,
      value && typeof value === 'object' ? JSON.stringify(value) : value,
      '#52c41a'
    );
  };
}

export default Console;
