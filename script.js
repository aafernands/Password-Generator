const displayLenght = document.getElementById("displayLenght");
const lengthInput = document.getElementById("lenght");

// Set the initial display value to the default range value (53)
displayLenght.textContent = lengthInput.value;

// Display the length value as the range slider is adjusted
lengthInput.addEventListener('input', function() {
    displayLenght.textContent = lengthInput.value; // Update the span text with the current value of the slider
});

function generateNewPassword() {
    var length = lengthInput.value; // Get the value from the range input
    if (isNaN(length) || length < 8 || length > 100) {
        alert("The length doesn't meet the requirements");
        return;
    }

    var symbols = document.getElementById('symbols').checked;
    var uppers = document.getElementById('uppers').checked;
    var lowers = document.getElementById('lowers').checked;
    var numbers = document.getElementById('numbers').checked;
    var password = '';

    if (uppers) {
        password += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }

    if (lowers) {
        password += 'qwertyuiopasdfghjklzxcvbnm';
    }

    if (numbers) {
        password += '1234567890';
    }

    if (symbols) {
        password += '!@#$%^&*(){}[]=<>/,.'; 
    }

    if (!symbols && !numbers && !uppers && !lowers) {
        alert('You must choose at least one character type!');
        return;
    }

    var randomPassword = '';
    for (var i = 0; i < length; i++) {
        randomPassword += password.charAt(Math.floor(Math.random() * password.length));
    }

    document.getElementById('displayPassword').value = randomPassword;
    alertBox.innerHTML = 'Your New Password Copied: <br>' + randomPassword;
}

function copyPassword() {
    var copyPassText = document.getElementById('displayPassword');
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand('copy');
    alertBox.classList.toggle('active');
    setTimeout(function() {
        alertBox.classList.toggle('active');
    }, 2000);
}

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
