// Path: index.js
const inputField = document.getElementById("URL");
const saveButton = document.getElementById("save");

// Check if local storage has any previous data and populate the input field
const savedData = localStorage.getItem("savedData");
if (savedData) {
  inputField.value = savedData;
}

// Add a click event listener to the save button
saveButton.addEventListener("click", function () {
  // Get the input value
  const inputValue = inputField.value;

  // Check if the input value is not empty
  if (inputValue.trim() !== "") {
    // Store the input value in local storage
    localStorage.setItem("savedData", inputValue);}
});