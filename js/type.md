## 数据类型

### 参考 [阮一峰 数据类型](http://javascript.ruanyifeng.com/grammar/types.html)

### 概述

> javascript 一共有6种数据类型

* number (数值)
* string (字符串)
* boolean (布尔值)
* undefined (未定义)
* null (空)
* object (对象包括 object、array、function)

### typeof运算符

1.原始类型

```js
// 数值、字符串、布尔值 返回 number、string、boolean
typeof 123 // "number"
typeof '123' // "string"
typeof false // boolean
```

2.函数

```js
// 函数返回function
function f () {}
typeof f // "function"
```

3.undefined

```js
// undefined 返回 undefined
typeof a // “undefined”
```

4.其他

```js
// 除此之外 其他都返回 object
typeof window // "object"
typeof [] // "object"
typeof {} // "object"
typeof null // "object"
```
