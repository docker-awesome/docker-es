# Validator 验证器

## API 🔊

```js
// 引用
import Validator from '@docker-es/validator';

// 验证身份证号
Validator.isIdentityCard(id);

// 验证密码
Validator.isStrongPassword(pwd);

// 验证整数
Validator.isInt(num);

// 验证小数
Validator.isDecimal(num);

// 判空
Validator.isEmpty(obj);

// 验证数组
Validator.isArray(arr);

// 验证字符串
Validator.isString(str);

// 验证布尔值
Validator.isBoolean(bool);

// 验证数字
Validator.isNumber(num);
```

## E.G. 🌰

```js
import Validator from '@docker-es/validator';

Validator.isIdentityCard('412827200001019999'); // false
Validator.isStrongPassword('P@ssw0rd'); // true
```
