# throttle 节流

## API 🔊

```js
// 引用
import throttle from '@docker-es/throttle';

// 使用
const fn = throttle(function (props) {
  // Your code...
}, duration);
```

## E.G. 🌰

```js
import throttle from '@docker-es/throttle';

const callback = throttle(function (props) {
  console.log('页面滚动～');
}, 350);

window.addEventListener('scroll', callback);
```
