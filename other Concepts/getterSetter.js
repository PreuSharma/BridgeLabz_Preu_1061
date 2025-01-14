// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
  
//     // Getter for fullName
//     get fullName() {
//       return this.firstName + ' ' + this.lastName;
//     },
  
//     // Setter for fullName
//     set fullName(name) {
//       const parts = name.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   };
  
//   console.log(person.fullName); // "John Doe" (getter)
//   person.fullName = 'Alice Smith'; // "setter"
//   console.log(person.firstName); // "Alice"
//   console.log(person.lastName);  // "Smith"
  


var ans=(function(){
    var privateVal=12;
    return {
        getter: function()
        {
            console.log(privateVal);
        },
        setter: function(val)
        {
            privateVal=val;
        }
    }
})
()

ans.getter();
ans.setter(24)
ans.getter()