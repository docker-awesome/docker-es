# Storage（本地/会话）储存

## API 🔊

本地存储

```js
import { Storage } from '@docker-es/storage';

/** 设置本地存储
 * @param {string} key 键
 * @param {any} value 键值
 * @param {{ expires?: number }} options 可选项配置 (expires: 过期时间， 单位：毫秒)
 * @returns {void}
 */
Storage.set(key, value, options);

/** 获取本地存储
 * @param {string} key 键
 * @returns {any} 存储值
 */
Storage.get(key);

/** 清除本地存储
 * @returns {void}
 */
Storage.clear();

/** 清除指定存储
 * @param {string} key 键
 * @returns {void}
 */
Storage.remove(key);
```

会话存储

```js
import { Session } from '@docker-es/storage';

/** 设置会话存储
 * @param {string} key 键
 * @param {any} value 键值
 * @param {{ expires?: number }} options 可选项配置 (expires: 过期时间， 单位：毫秒)
 * @returns {void}
 */
Session.set(key, value);

/** 获取会话存储
 * @param {string} key 键
 * @returns {any} 存储值
 */
Session.get(key);

/** 清除会话存储
 * @returns {void}
 */
Session.clear();

/** 清除指定会话存储
 * @param {string} key 键
 * @returns {void}
 */
Session.remove(key);
```

## E.G. 🌰

```js
import { Storage, Session } from '@docker-es/storage';

// 本地存储
Storage.set('person', { name: 'xxx', age: 18, gender: 1 });
Storage.get('person');

Storage.set('id', '1', { expires: 5 * 60 * 1000 }); // 5 分钟后过期

// 会话存储
Session.set('account', { username: 'xxx', password: 'xxx' });
Session.get('account');

Session.set('id', '1', { expires: 5 * 60 * 1000 }); // 5 分钟后过期
```
