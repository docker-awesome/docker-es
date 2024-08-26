# throttle 节流

## API 🔊

```js
// 引用
import throttle from '@docker-es/throttle';

// 使用

/** 节流
 * @param {Function} callback 需要执行的函数
 * @param {number} duration 节流时间 单位：毫秒
 * @returns {Function} 节流函数
 */
const fn = throttle(callback, duration);
```

## E.G. 🌰

```js
import throttle from '@docker-es/throttle';

const fn = throttle(function (props) {
  console.log('页面滚动～');
}, 350);

window.addEventListener('scroll', fn);
```
