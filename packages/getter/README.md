# Getter 常用函数工具

## API 🔊

```js
// 引用
import Getter from '@docker-es/getter';

// 方法

/** 获取字符串/类数组的长度
 * @param {Parameters<typeof Array.from>[0]} data 可遍历数据
 * @returns {number} 字符串/类数组的长度
 */
Getter.count(data);

/** 获取随机字符串 id
 * @params {object} [options] 配置项
 * @params {string | number} [options.prefix] 前缀
 * @params {string | number} [options.suffix] 后缀
 * @returns {string} 随机字符串 id
 */
Getter.id(options);

/** 获取uuid
 * @returns {`${string}-${string}-${string}-${string}-${string}`} uuid
 */
Getter.uuid();

/** 获取数据类型
 * @param {any} data 任意数据
 * @returns {'boolean' | 'null' | 'undefined' | 'number' | 'string' | 'symbol' | 'array' | 'object' | 'function' | 'date' | 'regexp'} 数据类型
 */
Getter.type(data);

/** 获取“四舍五入”后的数值
 * @param {number} number 需要四舍五入的数字
 * @param {number} precision 保留小数位数
 * @returns {number} 四舍五入后的数值
 */
Getter.round(number, precision);

/** 获取 [from, to] 范围的随机整数 或 [from, to) 范围的随机数 （注意开闭区间）
 * @param {number} number 需要四舍五入的数字
 * @param {number} precision 保留小数位数
 * @param {boolean} isInteger 是否取整, 默认 true
 * @returns {number} 四舍五入后的数值
 */
Getter.random(from, to, isInteger);

/** 深拷贝
 * @param {any} data 任意数据
 * @returns {any} 深拷贝结果
 */
Getter.clone(data);

/** 获取 Jsonp 请求结果
 * @param {string} url API 接口地址
 * @param {Object} params API 接口查询参数
 * @returns {Promise<any>} 异步返回数据
 */
Getter.jsonp(url, params)
  .then((res) => {})
  .catch((error) => {});
```

## E.G. 🌰

```js
import Getter from '@docker-es/getter';

Getter.count('hello'); // 5

Getter.id(); // 'kypwg2fca0k'
Getter.id({ prefix: 'Getter_' }); // 'Getter_kypwg2fca0k'
Getter.id({ suffix: 86400000 }); // 'kypwg2fca0k86400000'

Getter.uuid(); // 'ab5ecdc0-b3fe-4420-a002-169d0e217392'

Getter.type('hello'); // string

Getter.round(3.1415926, 2); // 3.14

Getter.random(1, 10); // [1, 10] 范围(包含1，10)的随机整数
Getter.random(1, 10, false); // [1, 10) 范围(包含1，不包含10)的随机数

Getter.clone({ name: 'clone', arr: [1, 2, 3] }); // { name: 'clone', arr: [1, 2, 3] }

// 请求 https://domain.com/api/query?id=1
Getter.jsonp('https://domain.com/api/query', {
  id: 1
})
  .then((res) => {
    // Your code...
  })
  .catch((error) => {
    // Your code...
  });
```
