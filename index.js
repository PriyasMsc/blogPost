// Import stylesheets
import './style.css';

// Write Javascript code!
// closure
function showName(firstName, lastName) {
  var nameIntro = "My name is ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }

  return makeFullName();
}

document.getElementById("closure").innerHTML =
  showName("Priyanga", "Subramaniam"); 
  

 // hoist  
hoist = 5; // Assign 5 to hoist

var elem = document.getElementById("hoist"); // Find an element 
elem.innerHTML = hoist;           // Display hoist in the element

var hoist; // Declare hoist

// this 
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("this").innerHTML = person.fullName();