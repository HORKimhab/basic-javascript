const log = console.log;
function Human(firstName, lastName) {
  // Constructor in JS |
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create new object | Extend Access Value from Constructor

const x = new Human("Th", "Chumnith");
// log((x.firstName = "" + x.lastName));
log(`${x.firstName} ${x.lastName}`);
// log(Human);
// log(x);

//
class FullName {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const x1 = new FullName("Th1", "Chumnith1");
log(`${x1.firstName} ${x1.lastName}`);


/* OLOO */
const Human1 = {
  init (firstName, lastName ) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

/* Create new Object or Extend Object from Object */
const chris = Object.create(Human1)
// Paste Value for Object 
chris.init('Vuth', 'Dara')

log('OLOO');
console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier


/* Style 2 of OLOO */
log('/* Style 2 of OLOO */'); 
const Human2 = {
  init () {
    // ...
    return this; 
  }
}

const chris2 = Object.create(Human2).init('Chris', 'Coyier')
log(chris2); 
// log(chris2.firstName) // Chris
// log(chris2.lastName) // Chris