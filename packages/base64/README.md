# Base64 编码/解码

## API 🔊

```js
// 引用
import Base64 from '@docker-es/base64';

// Base64 编码 (UTF-8-encoded to Base64 string)
Base64.encode(str, [safety]);

// Base64 解码 (Base64 to UTF-8 string)
Base64.decode(str);
```

## E.G. 🌰

```js
import Base64 from '@docker-es/base64';

const encodeStr = Base64.encode('Hello, world!');
const decodeStr = Base64.decode(encodeStr);
```
