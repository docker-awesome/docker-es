# Getter 常用函数工具

## API 🔊

```js
// 引用
import Getter from '@docker-es/getter';

// 方法
Getter.count(data); // 获取字符串/类数组的长度
Getter.uuid(); // 随机字符串 id
Getter.type(data); // 获取数据类型
Getter.round(number, precision); // 四舍五入
Getter.random(from, to, isInteger); // from, to 区间内随机(整)数
Getter.jsonp(url, params); // jsonp 请求
```

## E.G. 🌰

```js
import Getter from '@docker-es/getter';

Getter.count('hello'); // 5

Getter.uuid(); // 'kypwg2fca0k' 随机字符串 id

Getter.type('hello'); // string

Getter.round(3.1415926, 2); // 3.14

Getter.random(1, 10); // 1 至 10 之间的随机整数

// 请求 https://domain.com/api/query?id=1
Getter.jsonp('https://domain.com/api/query', {
  id: 1
});
```
