# classnames 合并类名

## API 🔊

```js
// 引用
import classnames from '@docker-es/classnames';

/** 支持多个字符串
 * @param {string} class1 类名1
 * @param {string} class2 类名2
 * @param {string} ... 更多的类名
 * @returns {string} 拼接好的类名
 */
classnames(class1, class2, ...);

/** 支持多个嵌套数组
 * @param {Array} array1 类名数组1
 * @param {Array} array2 类名数组2
 * @param {Array} ... 更多的类名数组
 * @returns {string} 拼接好的类名
 */
classnames(array1, array2, ...);

/** 支持多个对象
 * @param {Object} obj 对象的键作为类名，键值：true / false, 保留键值为 true 的键作为类名
 * @param {Object} ... 更多的对象
 * @returns {string} 拼接好的类名
 */
classnames(obj1, obj2, ...);

/** 支持混合参数：字符串、嵌套数组、对象
 * @param {string} class1 类名1
 * @param {Object} obj2
 * @param {string | Object | Array} ... 更多的参数
 * @returns {string} 拼接好的类名
 */
classnames(class1, obj2, [class3, obj4, ...], ...);
```

## E.G. 🌰

```js
import classnames from '@docker-es/classnames';

// 字符串
classnames('username', 'avatar'); // 'username avatar'

// 数组
classnames(['username', ['avatar'], 'userId'], ['age']); // 'username avatar userId age'

// 对象(保留键值为 true 的类名)
classnames({ username: true, avatar: false, userId: true }); // 'username userId'

// 混合参数
classnames('username', { avatar: true, age: false }, [
  'userId',
  ['gender', { address: true }],
  { mobile: false, email: true }
]); // 'username avatar userId gender address email'
```

```jsx
import classnames from '@docker-es/classnames';

/* 对应 css
  .uppercase {
    text-transform: uppercase;
  }
  .bolder {
    font-weight: bolder;
  }
  .underline {
    text-decoration: underline;
  }
*/

function App() {
  return (
    <div className={classnames({ uppercase: true }, 'bolder', ['underline'])}>
      hello, world!
    </div>
  );
}

// 结果： <div class='uppercase bolder underline'>hello, world!</div>;
```
