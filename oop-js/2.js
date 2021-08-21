const log = console.log;
log("Factory Functions OOP JS");

// Create Function
function fullName(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// Create New Object
const my_name = fullName("H", "Kimhab");
log(`My name is ${my_name.firstName} ${my_name.lastName}`);

log("Declare Properties and Method with Constructor");

// Create New Function Greeting
function Greeting(your_word, toUser) {
  // Declare Properties
  this.your_word = your_word;
  this.toUser = toUser;

  // Declare Method || Declare method Directly
  /* this.sayHello = function () {
    log(`I'm HKimhab, ${your_word} ${toUser}.`);
  }; */
}

// Create New Object
const my_greeting = new Greeting("Nice to see", "Sok");

// Declare Method with Prototype
Greeting.prototype.sayHello = function () {
  log(`I'm HKimhab, ${this.your_word} ${this.toUser}.`);
};

log(my_greeting);
log("Get value from sayHello");
my_greeting.sayHello();
