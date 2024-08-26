# Builder 常用函数工具

## API 🔊

```js
// 引用
import Builder, { URIBuilder } from '@docker-es/builder';

// 方法

/** 构建 URI
 * @param {{ protocol?: string; username?: string; password?: string; hostname?: string; port?: string | number; pathname?: string; search?: string; hash?: string; }} data
 * @returns {string} URI
 */
Builder.URI(data);
// 等同于
URIBuilder.URI(data);
```

## E.G. 🌰

```js
import Builder, { URIBuilder } from '@docker-es/builder';

// Builder.URI = URIBuilder.URI

// js.org?id=js
Builder.URI({
  hostname: 'js.org',
  search: '?id=js'
});
// 等同于
URIBuilder.URI({
  hostname: 'js.org',
  search: '?id=js'
});

// https://js.org?id=js
Builder.URI({
  protocol: 'https:',
  hostname: 'js.org',
  search: '?id=js'
});

// js.org/api/query?id=js
Builder.URI({
  hostname: 'js.org',
  pathname: '/api/query',
  search: '?id=js'
});

// https://js.org/api/query?id=js
Builder.URI({
  protocol: 'https:',
  hostname: 'js.org',
  pathname: '/api/query',
  search: '?id=js'
});

// https://js.org/api/query?id=js
Builder.URI({
  protocol: 'https',
  hostname: 'js.org',
  pathname: 'api/query',
  search: 'id=js'
});
```
