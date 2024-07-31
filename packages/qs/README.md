# Qs 查询字符串解析和字符串化

## API 🔊

```js
// 引用
import Qs from '@docker-es/qs';

// 使用
Qs.stringify(object, [options]);
Qs.parse(string, [options]);
```

## E.G. 🌰

```js
import Qs from '@docker-es/qs';

Qs.stringify({ a: 'b', c: 'd' }); // ?a=b&c=d
Qs.parse('?a=b&c=d'); // { a: 'b', c: 'd' }
```
