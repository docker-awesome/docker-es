# Logger 打印日志

## API 🔊

```js
// 引用
import Logger from '@docker-es/console';

/** 打印信息
 * @param {string} label 标识
 * @param {string} value 需要打印的信息数据
 * @returns {void}
 */
Logger.info(label, value);

/** 打印错误
 * @param {string} label 标识
 * @param {string} value 需要打印的错误数据
 * @returns {void}
 */
Logger.error(label, value);

/** 打印警告
 * @param {string} label 标识
 * @param {string} value 需要打印的警告数据
 * @returns {void}
 */
Logger.warn(label, value);

/** 打印成功
 * @param {string} label 标识
 * @param {string} value 需要打印的成功数据
 * @returns {void}
 */
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
