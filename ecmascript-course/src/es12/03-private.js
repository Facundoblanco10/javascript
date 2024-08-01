// Define a class
class user {
    // Constructor
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    // Methods
    #speak() {
      return `${this.greeting()}, my name is ${this.name}`;
    }
    greeting() {
      return 'Hello';
    }
  
    get #uAge() {
      return this.age;
    }
    set #uAge(age) {
      this.age = age;
    }
  }
  
  const facu = new user('facu');
  console.log(facu.greeting());
  
  const developer = new user('developer');
  console.log(developer.greeting());
  
  const pepe = new user('pepe');
  console.log(pepe.greeting());

  console.log(facu.speak()); // Error: Cannot access private method #speak