export default class URIBuilder {
  static protocol(data?: string): string;
  static user({
    username,
    password
  }: {
    username?: string;
    password?: string;
  }): string;
  static hostname(data?: string): string;
  static host({
    hostname,
    port
  }: {
    hostname?: string;
    port?: number | string;
  }): string;
  static pathname(data?: string): string;
  static search(data?: string): string;
  static hash(data?: string): string;
  static URI({
    protocol,
    username,
    password,
    hostname,
    port,
    pathname,
    search,
    hash
  }: {
    protocol?: string;
    username?: string;
    password?: string;
    hostname?: string;
    port?: string | number;
    pathname?: string;
    search?: string;
    hash?: string;
  }): string;
}
