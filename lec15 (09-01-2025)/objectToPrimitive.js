let user = {
    name: "Preu",
    age: 21,
    toString() {
      return this.name;
    },
    valueOf() {
      return this.age;
    }
  };
  
  console.log(String(user)); // Output: "Preu" (calls toString)
  console.log(Number(user)); // Output: 21 (calls valueOf)
  