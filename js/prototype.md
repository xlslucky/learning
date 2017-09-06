## 原型

### 参考 [深入理解javascript原型和闭包](http://www.cnblogs.com/wangfupeng1988/p/3977924.html)

1.typeof 输出的几种类型

```js
// 简单类型
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
// 我们在定义函数的时候，函数定义的时候函数本身就会默认有一个prototype的属性，而我们如果用new 运算符来生成一个对象的时候就没有prototype属性，但是这个对于有__proto__属性，指向实例的prototype
function a(c){
    this.b = c;
    this.d =function(){
        alert(this.b);
    }
}
var obj = new a('test');
typeof obj.prototype // undefine
typeof a.prototype // object

obj.__proto__ == a.prototype // true
```