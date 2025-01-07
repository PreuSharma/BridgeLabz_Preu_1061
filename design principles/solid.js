// 1. S - Single Responsibility Principle (SRP)
// Ek class ya function ka sirf ek kaam hona chahiye.


// function createUser(name) {
//     console.log(`User ${name} created.`);
//   }
  
//   function sendEmail(name) {
//     console.log(`Email sent to ${name}.`);
//   }
  
//   createUser("Ali");
//   sendEmail("Ali"); 


// 2. O - Open/Closed Principle (OCP)
// Code aise likho ki naye features add kar sako bina purana code badle..using extend keyword

// class Payment {
//     pay() {
//       console.log("Payment done.");
//     }
//   }
  
//   class CreditPayment extends Payment {
//     pay() {
//       console.log("Credit card payment done.");
//     }
//   }
  
//   class PayPalPayment extends Payment {
//     pay() {
//       console.log("PayPal payment done.");
//     }
//   }
  
//   const payment1 = new CreditPayment();
//   payment1.pay();
  
//   const payment2 = new PayPalPayment();
//   payment2.pay();
  

// 3.  L - Liskov Substitution Principle (LSP)
// Subclass (child class) parent class ki jagah use ho aur sab sahi kaam kare.

// class Bird {
//     move() {
//       console.log("Bird is moving.");
//     }
//   }
  
//   class Sparrow extends Bird {
//     fly() {
//       console.log("Sparrow is flying.");
//     }
//   }
  
//   class Penguin extends Bird {
//     swim() {
//       console.log("Penguin is swimming.");
//     }
//   }
  
//   const sparrow = new Sparrow();
//   sparrow.move();
//   sparrow.fly();
  
//   const penguin = new Penguin();
//   penguin.move();
//   penguin.swim();
  




// 4. I - Interface Segregation Principle (ISP)
// Class ko unnecessary methods implement karne ki majboori na ho.

// class Walker {
//     walk() {
//       console.log("Walking...");
//     }
//   }
  
//   class Flyer {
//     fly() {
//       console.log("Flying...");
//     }
//   }
  
//   const dog = new Walker();
//   dog.walk();
  
//   const bird = new Flyer();
//   bird.fly();
  




// 5. D - Dependency Inversion Principle (DIP)
// High-level aur low-level modules directly depend na karein, abstraction ka use karein.


// class Database {
//     connect() {
//       console.log("Database connected.");
//     }
//   }
  
//   class App {
//     constructor(database) {
//       this.database = database;
//     }
  
//     start() {
//       this.database.connect();
//       console.log("App started.");
//     }
//   }
  
//   const db = new Database();
//   const app = new App(db);
//   app.start();
  