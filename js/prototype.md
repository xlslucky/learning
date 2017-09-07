## 原型

### 参考 [（深入理解javascript原型和闭包）](http://www.cnblogs.com/wangfupeng1988/p/3977924.html)  [（深入分析js中的constructor 和prototype）](http://www.cnblogs.com/yupeng/archive/2012/04/06/2435386.html)

1.typeof 输出的几种类型

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
```

```js
// 我们在定义函数的时候，函数定义的时候函数本身就会默认有一个prototype的属性
// 而我们如果用new 运算符来生成一个对象的时候就没有prototype属性，但是这个对象有__proto__属性，指向实例的prototype
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