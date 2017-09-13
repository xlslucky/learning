## 原型

### 参考 [（深入理解javascript原型和闭包）](http://www.cnblogs.com/wangfupeng1988/p/3977924.html)  [（深入分析js中的constructor 和prototype）](http://www.cnblogs.com/yupeng/archive/2012/04/06/2435386.html)

1. 一切都是对象 (值类型就不是对象)

> 对象——若干属性的集合。

typeof 输出的几种类型

基本数据类型 `undefined`、 `string`、 `number`、 `boolean`、 `null` & 复杂数据类型 `object`

基本类型 `undefined`、 `string`、 `number`、 `boolean`、 `null` & 引用类型 `object`、 `array`、 `function`、 `regexp` ...

```js
// 基本类型
console.log(typeof name) // undefined
console.log(typeof 'xlsluck') // string
console.log(typeof 22) // number
console.log(typeof true) // boolean
// 引用类型
console.log(typeof function(){}) // function

console.log(typeof [1, 2, 3]) // object
console.log(typeof {name: 'xlslucky'}) // object
console.log(typeof null) // object
```

2.函数和对象的关系

```js
  // 函数就是对象的一种 
  var fn = function () { };
  fn instanceof Object // true
  typeof fn // function

  // 对象可以通过函数来创建
  function Fn() {
    this.name = '小呀嘛小二郎';
    this.sex = 'boy';
  }
  var fn1 = new Fn();
  fn1.name // '小呀嘛小二郎'
  fn1.sex // 'boy'

  // 这是创建对象、数组的 语法糖
  var obj = {name: '小呀嘛小二郎'}
  var arr = [1, 2, 3]
```

3. prototype 原型

> 每个函数都有一个prototype, 每个对象都有一个__proto__

* 每个对象都是new Object()创建出来的，`o1、o2`的`__proto__`指向`创建他们的object`的`prototype`属性。
* `Object`的`prototype`有`constructor`属性，指向`function Object(){}`这个构造函数。
* `function Object(){}`的`prototype`就是`object.prototype`。
![object_prototype_1](https://github.com/xlslucky/learning/blob/master/images/object_prototype_1.png)

```javascript
// 我们在定义函数的时候，函数定义的时候函数本身就会默认有一个prototype的属性
// 而我们如果用new 运算符来生成一个对象的时候就没有prototype属性，但是这个对象有__proto__属性，指向实例的prototype

// 每个对象都有一个__proto__属性，指向创建该对象的函数的prototype

function Parent(name){
  this.name = name;
}
Parent.prototype.do = function (){
  console.log(this.name + ' can do everthing')
}
var child = new Parent('xuls');

typeof child.prototype // undefine
typeof Parent.prototype // object

child.__proto__ == Parent.prototype // true

// Parent.prototype 包涵两个属性，一个是constructor，另一个是__proto__
// constructor就是构造函数Parent
```