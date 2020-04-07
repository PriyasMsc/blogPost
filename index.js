// Import stylesheets
import './style.css';

// Write Javascript code!
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
  

  
hoist = 5; // Assign 5 to hoist

elem = document.getElementById("hoist"); // Find an element 
elem.innerHTML = hoist;           // Display hoist in the element

var hoist; // Declare hoist