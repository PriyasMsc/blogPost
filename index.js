// Import stylesheets
import './style.css';

// Write Javascript code!
function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }

  return makeFullName();
}

document.getElementById("closure").innerHTML =
  showName("Priyanga", "Subrmaniam"); // Your name is Michael Jackson