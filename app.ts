class Animal {
   constructor(private name: string, private age: number){

   }

   public getName() : string {
      return this.name;
   }
}

var animal = new Animal('george', 4);
console.log(animal.getName());

class Car {
    constructor (public name: string) {

    }

    start() {
        console.log(`starting ${this.name}'s engine`)
    }
}
​
​
var car = new Car('bob');
​
car.start();
​
​
class BMW {
    car: Car
    constructor(public name?: string){
        this.car = new Car(name);
        this.name += ' Best car!';
    }
    start() {
      console.log(`starting ${this.name}'s engine`);
    }
}
​
var bmw = new BMW('Joe');
bmw.start();
