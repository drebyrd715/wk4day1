class Hamster {
    constructor(name ="", owner ="", price = 15) {
        this.name = name
        this.owner = owner
        this.price = price
    }
        wheelrun() {
        // console.log("squeak squeak!");
       }
       hide() {
    //    console.log("scurry away");
       }  
       eatfood() {
        // console.log("yum yum")
       }   
       getPrice() {
       return this.price
       } 
   }
   const lilBro = new Hamster ()
//    console.log(lilBro)
//    console.log(lilBro.getPrice())
//    lilBro.wheelrun()
//    lilBro.hide()
//    lilBro.eatfood()
//    console.log(lilBro.name)
//    console.log(lilBro.owner)


class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.mood = mood
        this.hamsters = hamsters
        this.bankAccount = bankAccount
    }
    getName() {
        return this.name
       }
       getAge() {
       return this.age;
       }  
       getWeight() {
        return this.weight
       }    
       greet() {
        console.log("Hello my name is "  +  this.name)
       }
       eat() {
        this.weight ++
        this.mood ++
       }
       exercise() {
        this.weight --
       }
       ageUp() {
        this.age ++
        this.height ++
        this.weight ++
        this.mood --
        this.bankAccount += 10
       }
       buyHamster(hamster) {
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
        this.hamsters.push(hamster)
       }
}   
    const bigBro = new Person ("john doe", 23, 6, 215, 4, [], 50)
    // bigBro.eat()
    // bigBro.greet()
    // bigBro.ageUp()
    // console.log(bigBro)

    const lilMan = new Person ("Timmy", 5)
    for (i = 0; i < 5; i++) {
        lilMan.eat();
    }
    for (i = 0; i < 5; i++) {
        lilMan.exercise();
    }
    for (i = 0; i < 9; i++) {
        lilMan.ageUp(); 
    }
    // console.log(lilMan)

    const Macaroni = new Hamster ("Gus", "Timmy")
    lilMan.buyHamster(Macaroni)
    // console.log(Macaroni)
    // console.log(lilMan)

    for (i = 0; i < 15; i++) {
        lilMan.ageUp();
    }
    for (i = 0; i < 2; i++) {
        lilMan.eat();
    }
    for (i = 0; i < 2; i++) {
        lilMan.exercise();
    }
    // console.log(lilMan)

    class Dinner {
        constructor(appetizer, entree, dessert) {
            this.appetizer = appetizer
            this.entree = entree
            this.dessert = dessert
        }
    }
    
    class Chef {
        getDinner (appetizer, entree, dessert) {
            return new Dinner (appetizer, entree, dessert)

        }
        
    }
    const myDawg = new Chef 
    console.log(myDawg.getDinner("Cheese sticks", "wings", "ice cream"))
    console.log(myDawg.getDinner("Pizza", "fries", "brownie"))
    console.log(myDawg.getDinner("Macaroni", "tatter tots", "Chocolate chip"))

