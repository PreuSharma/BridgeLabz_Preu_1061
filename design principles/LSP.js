// Galat Tareeka
class Bird1 {
    fly() {
      console.log("Flying...");
    }
  }
  
  class Penguin2 extends Bird1 {
    fly() {
      throw new Error("Penguins can't fly!");
    }
  }
  
  // Sahi Tareeka
  class Bird {
    move() {
      console.log("Moving...");
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("Flying...");
    }
  }
  
  class Penguin extends Bird {
    swim() {
      console.log("Swimming...");
    }
  }
  
  const penguin = new Penguin();
  penguin.move();
  penguin.swim();
  