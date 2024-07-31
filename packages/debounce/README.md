# debounce 防抖

## API 🔊

```js
// 引用
import debounce from '@docker-es/debounce';

// 使用
const fn = debounce(function (props) {
  // Your code...
}, delay);
```

## E.G. 🌰

```js
import debounce from '@docker-es/debounce';

const callback = debounce(function (props) {
  console.log('页面滚动～');
}, 350);

window.addEventListener('scroll', callback);
```
