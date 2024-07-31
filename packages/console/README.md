# Logger 打印日志

## API 🔊

```js
// 引用
import Logger from '@docker-es/console';

// 打印信息
Logger.info(label, value);

// 打印错误
Logger.error(label, value);

// 打印警告
Logger.warn(label, value);

// 打印成功
Logger.success(label, value);
```

## E.G. 🌰

```js
import Logger from '@docker-es/console';

Logger.info('信息:', 'xxx');
Logger.error('错误:', 'xxx');
Logger.warn('警告:', 'xxx');
Logger.success('成功:', 'xxx');
```
