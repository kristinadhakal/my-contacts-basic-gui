// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global Variables
let output = [];
output.push(returnObject("a", "a", "a", "a"));
output.push(returnObject("b", "b", "b", "b"));
output.push(returnObject("c", "c", "c", "c"));

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  console.log("Display Contacts");
  outputEl.innerHTML = ""; // Clear the output

  // Add each contact to the output
  for (let i = 0; i < output.length; i++) {
    let divEl = document.createElement("div");
    divEl.innerHTML = `${i}. Name: ${output[i].name} | Email: ${output[i].email} | Phone Number: ${output[i].phoneNum} | Country: ${output[i].country}`;
    outputEl.appendChild(divEl);
  }
}

function addContact() {
  let name = prompt("Enter name:");
  let email = prompt("Enter email:");
  let phoneNum = prompt("Enter phone number:");
  let country = prompt("Enter a country");

  output.push(returnObject(name, email, phoneNum, country));
  displayContacts();
}

function removeContact() {
  let index = +prompt("Enter index of contact to remove: ");
  output.splice(index, 1);
  displayContacts();
}

function displayByName() {
  let inputName = prompt("Enter name of contact");

  outputEl.innerHTML = ""; // Clear the output
  for (i = 0; i < output.length; i++) {
    if (output[i].name.includes(inputName)) {
      // output[i] is an object, output[i].name is the name as a string of the current object
      let divEl = document.createElement("div");
      divEl.innerHTML = `${i}. Name: ${output[i].name} | Email: ${output[i].email} | Phone Number: ${output[i].phoneNum} | Country: ${output[i].country}`;
      outputEl.appendChild(divEl);
    }
  }
}

function displayByCountry() {
  let inputCountry = prompt("Enter name of country");

  outputEl.innerHTML = "";
  if (output[i].country.includes(inputCountry)) {
    let divEl = document.createElement("div");
    divEl.innerHTML = `${i}. Name: ${output[i].name} | Email: ${output[i].email} | Phone Number: ${output[i].phoneNum} | Country: ${output[i].country}`;
    outputEl.appendChild(divEl);
  }

  // Helper
  // new name

  function returnObject(
    nameParameter,
    emailParameter,
    phoneNumParameter,
    countryParameter
  ) {
    return {
      name: nameParameter,
      email: emailParameter,
      phoneNum: phoneNumParameter,
      country: countryParameter,
    };
  }
}
