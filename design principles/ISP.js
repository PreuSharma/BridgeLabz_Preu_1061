// Galat Tareeka
class Robot {
    walk() {
      console.log("Walking...");
    }
    fly() {
      throw new Error("Robots can't fly!");
    }
  }
  
  // Sahi Tareeka
  class Walker {
    walk() {
      console.log("Walking...");
    }
  }
  
  class Flyer {
    fly() {
      console.log("Flying...");
    }
  }
  
  const robot = new Walker();
  robot.walk();
  