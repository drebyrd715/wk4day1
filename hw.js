class Hamster {
    constructor(name ="", owner ="", price = 15) {
        this.name = name
        this.owner = owner
        this.price = price
    }
        wheelrun() {
        console.log("squeak squeak!");
       }
       hide() {
       console.log("scurry away");
       }  
       eatfood() {
        console.log("yum yum")
       }   
       getPrice() {
       return this.price
       } 
   }
   const lilBro = new Hamster ()
   console.log(lilBro)
   console.log(lilBro.getPrice())
//    lilBro.wheelrun()
//    lilBro.hide()
//    lilBro.eatfood()
//    console.log(lilBro.name)
//    console.log(lilBro.owner)


class Person {
    constructor(name, age, height, weight, mood, hamsters, bankaccount) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.mood = mood
        this.hamsters = hamsters
        this.bankaccount = bankaccount
    }
    getName() {
        console.log("returns name");
       }
       getAge() {
       console.log("returns age");
       }  
       getHeight() {
        console.log("returns height")
       }    
       greet() {
        console.log()
       }
       eat() {
        console.log('delicious')
       }
       exercise() {

       }
       ageup() {

       }
       buyHamster() {

       }
}
