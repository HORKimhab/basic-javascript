const log = console.log; 
const doc = document; 
log('Display JS Object'); 

// Create new Object JS 
const empInfo = {
  name: "HKimhab",
  age: 28,
  location: "PP",
  date: new Date(), 
  Other: "...",
  developer: function () { return true; }
}; 
log(empInfo); 
doc.getElementById("output1").innerHTML = empInfo; 

// varible Object.key
// Display by Name 
log('Display By Name');  
log(empInfo.Other); 

log('---***---'); 
log('Display By Loop');  
let data = ""; 
for (a in empInfo) {
  data += empInfo[a] + "<br />"; 
}
// log(data); 
doc.getElementById("output2").innerHTML = data; 

log('---***---'); 
log('Display By Values');
// Syntax Object.values() 
const newObject = Object.values(empInfo); 
log(newObject);   
doc.getElementById("output3").innerHTML = newObject; 
log(typeof newObject); 

log('---***---'); 
log('Display By JSon');
// const newJson = JSON.stringify(empInfo); 
// Convert JS Function in Object to string before output 
empInfo.developer = empInfo.developer.toString(); 
const newJson = JSON.stringify(empInfo); 
doc.getElementById("output4").innerHTML = newJson; 

// StringifyArray 
const newArr = [12, "Dara", "Love", "Tiktok"]; 
const aftArr = JSON.stringify(newArr); 
doc.getElementById("output5").innerHTML = aftArr; 
