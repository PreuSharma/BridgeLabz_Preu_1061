//parametrised constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let person1 = new Person("Preu", 21);
  console.log(person1); // Output: { name: "Preu", age: 21 }
  
//default constructor
//   class Person {
//     // No explicit constructor
//   }
  
//   let person1 = new Person(); 
//   console.log(person1); // Output: Person {}
  

//copy constructor
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     static copy(person) {
//       return new Person(person.name, person.age);
//     }
//   }
  
//   let person1 = new Person("Preu", 21);
//   let person2 = Person.copy(person1);
//   console.log(person2); // Output: Person { name: "Preu", age: 21 }
  

