class Person {
  constructor() {
    this.name = 'name'
    console.log(this);
    this.eat()
  }
  eat() {
    console.log('eat');
  }
}


let a = new Person()
console.log(a)