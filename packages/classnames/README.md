# classnames 合并类名

## API 🔊

```js
// 引用
import classnames from '@docker-es/classnames';

// 字符串
classnames(class1, class2, more...);

// 数组
classnames([class1, class2, [class3, more...], more...], more...);

// 对象
classnames({
  class1: boolean,
  class2: boolean,
});

// 混合参数
classnames(class1, { class2: boolean }, [class3]);
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

// 即 <div class='uppercase bolder underline'>hello, world!</div>;
```
