const displayLength = document.getElementById("displayLength");
const lengthInput = document.getElementById("length");
const passwordOutput = document.getElementById("displayPassword");
const strengthBar = document.getElementById("strength");

const symbolsCheckbox = document.getElementById("symbols");
const uppersCheckbox = document.getElementById("uppers");
const lowersCheckbox = document.getElementById("lowers");
const numbersCheckbox = document.getElementById("numbers");

// Update displayed length value
lengthInput.addEventListener('input', () => {
    displayLength.textContent = lengthInput.value;
    updateStrengthBar();
});

// Update strength bar on checkbox changes
[symbolsCheckbox, uppersCheckbox, lowersCheckbox, numbersCheckbox].forEach(checkbox => {
    checkbox.addEventListener('change', updateStrengthBar);
});

// Function to calculate and update the strength bar
function updateStrengthBar() {
    const length = parseInt(lengthInput.value, 10);
    const hasSymbols = symbolsCheckbox.checked;
    const hasUppers = uppersCheckbox.checked;
    const hasLowers = lowersCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;

    let strength = 0;

    // Add points for length
    if (length >= 8) strength += length / 10;

    // Add points for character variety
    if (hasSymbols) strength += 1;
    if (hasUppers) strength += 1;
    if (hasLowers) strength += 1;
    if (hasNumbers) strength += 1;

    // Cap strength to a maximum of 5
    strength = Math.min(strength, 5);

    // Update strength bar width and color
    strengthBar.style.width = `${(strength / 5) * 100}%`;
    strengthBar.style.backgroundColor = getStrengthColor(strength);
}

// Function to get color based on strength
function getStrengthColor(strength) {
    if (strength < 2) return "#ff4d4d"; // Weak (Red)
    if (strength < 4) return "#ffcc00"; // Medium (Yellow)
    return "#4caf50"; // Strong (Green)
}

// Generate a new password
function generateNewPassword() {
    const length = parseInt(lengthInput.value, 10);
    const hasSymbols = symbolsCheckbox.checked;
    const hasUppers = uppersCheckbox.checked;
    const hasLowers = lowersCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;

    let charPool = "";

    if (hasSymbols) charPool += "!@#$%^&*(){}[]=<>/,.";
    if (hasUppers) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasLowers) charPool += "abcdefghijklmnopqrstuvwxyz";
    if (hasNumbers) charPool += "0123456789";

    if (!charPool) {
        passwordOutput.value = "Please select at least one option.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }

    passwordOutput.value = password;
    updateStrengthBar();
}

// Copy password to clipboard
function copyPassword() {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

// Initialize the year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Initial update of the strength bar
updateStrengthBar();
