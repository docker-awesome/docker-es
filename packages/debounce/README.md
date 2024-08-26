# debounce 防抖

## API 🔊

```js
// 引用
import debounce from '@docker-es/debounce';

// 使用

/** 防抖
 * @param {Function} callback 需要执行的函数
 * @param {number} duration 防抖时间 单位：毫秒
 * @returns {Function} 防抖函数
 */
const fn = debounce(callback, delay);
```

## E.G. 🌰

```js
import debounce from '@docker-es/debounce';

const fn = debounce(function (props) {
  console.log('页面滚动～');
}, 350);

window.addEventListener('scroll', fn);
```
