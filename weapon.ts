class Weapon {
   constructor(private name: string){

   }
   public getName() : string {
      return this.name;
   }
   public setName(name:string) : void {
      this.name = name;
   }
}

var weapon = new Weapon('george');
console.log(weapon.getName());



var twoDArray = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}]
];


twoDArray[x][y];


