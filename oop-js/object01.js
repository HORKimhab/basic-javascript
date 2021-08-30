const log = console.log;
log("JS Object Nested");
const myObj = {
  name: "John",
  age: 30,
  cars: {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat"
  }
}
// document.getElementById("output").innerHTML = myObj.cars.car2;
document.getElementById("output").innerHTML = myObj.cars['car3'];

log('Nested Array and Object');
let x = "";
const myObj1 = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]}, // i = 0 // arr 0
    {name:"BMW", models:["320", "X3", "X5"]}, // arr 1
    {name:"Fiat", models:["500", "Panda"]} // arr 2 
  ]
}

for (let i in myObj1.cars) {
    x += "<h2>" + myObj1.cars[i].name + "</h2>"; // myObj1.cars[0].name == Ford
    log(myObj1.cars[i].name); 
  for (let j in myObj1.cars[i].models) {
    x += myObj1.cars[i].models[j] + "<br>"; // i= 0 j == 0 Fiesta, j = 1 -> Focus, j = 2 -> Mustang
  }
}
document.getElementById("output1").innerHTML = x; 
