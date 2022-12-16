// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Global Variables
let output = [];

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
    divEl.innerHTML = output[i].name;
    outputEl.appendChild(divEl);
  }
}

function addContact() {
  let name = prompt("Enter name:");
  let email = prompt("Enter email:");
  let phoneNum = prompt("Enter phone number:");

  output.push(returnObject(name, email, phoneNum));
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

// Helper
// new name

function returnObject(nameParameter, emailParameter, phoneNumParameter) {
  return {
    name: nameParameter,
    email: emailParameter,
    phoneNum: phoneNumParameter,
  };
}
