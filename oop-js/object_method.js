const log = console.log;
const doc = document;

const person = {
  firstName: "H",
  lastName: "Kimhab",
  id: 5566,
  fullName : function() {
    return this.firstName + this.lastName;
  }
};
// person.fullName(); 
// object.MethodName(); // Syntax 
let fulName = person.fullName();
let test = person.fullName;
log(test); 
doc.getElementById("output").innerHTML = fulName; 
doc.getElementById("output1").innerHTML = test;

// Method Out of Object 
person.fullName1 = function () {
    let FullName = (this.firstName + " " + this.lastName).toLowerCase();
    return FullName; 
}

doc.getElementById("output2").innerHTML = person.fullName1(); 
