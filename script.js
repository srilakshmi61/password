const passwordDisplay = document.getElementById("passwordDisplay");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  let length = +lengthSlider.value;
  let chars = letters;
  if (includeNumbers.checked) chars += numbers;
  if (includeSymbols.checked) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordDisplay.textContent = password;
}

// Initial password
generatePassword();

// Update slider value text
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
  generatePassword();
});

// Update password on toggle
includeNumbers.addEventListener("change", generatePassword);
includeSymbols.addEventListener("change", generatePassword);
