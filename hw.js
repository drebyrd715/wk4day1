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
       ageup() {
        this.age ++
        this.height ++
        this.weight ++
        this.mood --
        this.bankAccount += 10
       }
       buyHamster(hamster) {
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
       }
}   
    const bigBro = new Person ("john doe", 23, "six foot", 215, 4, [], 50)
    // bigBro.eat()
    // bigBro.greet()
    // bigBro.ageup()
    // console.log(bigBro)

    
