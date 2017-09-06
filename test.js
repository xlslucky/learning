function Parent(name){
  this.name = name;
}
Parent.prototype.do = function () {
  console.log(this.name + 'fuck')
}
var newPeople = new Parent('胥');

newPeople.do()

console.log(newPeople.__proto__, '__proto__')
console.log(Parent.prototype, 'prototype')

function type () {
  console.log(typeof name) // undefined
  console.log(typeof 'xlsluck') // string
  console.log(typeof 22) // number
  console.log(typeof true) // boolean

  console.log(typeof function(){}) // function
  
  console.log(typeof [1, 2, 3]) // object
  console.log(typeof {name: 'xlslucky'}) // object
  console.log(typeof null) // object
}

type()
