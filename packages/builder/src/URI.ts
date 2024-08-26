class URIBuilder {
  static #padStarts(data?: string, identifier?: string) {
    if (!data || !identifier) return '';
    return data.startsWith(identifier) ? data : `${identifier}${data}`;
  }
  static protocol(data?: string) {
    if (!data) return '';
    return data.endsWith(':') ? `${data}//` : `${data}://`;
  }
  static user({
    username,
    password
  }: {
    username?: string;
    password?: string;
  }) {
    if (username) {
      if (password) {
        return `${username}:${password}@`;
      }
      return `${username}@`;
    }
    return '';
  }
  static hostname(data?: string) {
    if (!data) return '';
    return data.endsWith('/') ? data.replace(/\/$/, '') : data;
  }
  static host({
    hostname,
    port
  }: {
    hostname?: string;
    port?: number | string;
  }) {
    if (port) {
      return `${URIBuilder.hostname(hostname)}:${port}`;
    }
    return URIBuilder.hostname(hostname);
  }
  static pathname(data?: string) {
    return this.#padStarts(data, '/');
  }
  static search(data?: string) {
    return this.#padStarts(data, '?');
  }
  static hash(data?: string) {
    return this.#padStarts(data, '#');
  }
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
  }) {
    const prefix = URIBuilder.protocol(protocol);
    const user = URIBuilder.user({ username, password });
    const host = URIBuilder.host({ hostname, port });
    const path = URIBuilder.pathname(pathname);
    const suffix = `${URIBuilder.search(search)}${URIBuilder.hash(hash)}`;
    return `${prefix}${user}${host}${path}${suffix}`;
  }
}

export default URIBuilder;
