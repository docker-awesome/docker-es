# Storage（本地/会话）储存

## API 🔊

本地存储

```js
import { Storage } from '@docker-es/storage';

// 设置本地存储
Storage.set(key, value);

// 获取本地存储
Storage.get(key);

// 清除本地存储
Storage.clear();

// 清除指定存储
Storage.remove(key);
```

会话存储

```js
import { Session } from '@docker-es/storage';

// 设置会话存储
Session.set(key, value);

// 获取会话存储
Session.get(key);

// 清除会话存储
Session.clear();

// 清除指定会话存储
Session.remove(key);
```

## E.G. 🌰

```js
import { Storage, Session } from '@docker-es/storage';

// 本地存储
Storage.set('person', { name: 'xxx', age: 18, gender: 1 });
Storage.get('person');

// 会话存储
Session.set('account', { username: 'xxx', password: 'xxx' });
Session.get('account');
```
