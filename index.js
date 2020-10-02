function generateNewPassword() {
	var length = Number(prompt('How many characters would you like your password? Choose between 8 and 128'));
	if (isNaN(length) || length < 8 || length > 128) {
		alert("The length doesn't meet the requirements");
		return;
	}
	var symbols = confirm('Would you like to use special characters?');
	var uppers = confirm('Would you like to use uppercase letters?');
	var lowers = confirm('Would you like to use lowercase letters?');
	var numbers = confirm('Would you like to use numbers?');
	var password = '';
	
	if (uppers) {
		password = password + 'QWERTYUIOPASDFGHJKLZXCVBNM';
	}

	if (lowers) {
		password = password + 'qwertyuiopasdfghjklzxcvbnm';
	}

	if (numbers) {
		password = password + '1234567890';
	}

	if (symbols) {
		password = password + '!@#$%^&*(){}[]=<>/,.';
	}

	if (!symbols && !numbers && !uppers && !lowers) {
		choices = alert('You must choose a character type!');
	}

	var randomPassword = '';
	for (var i = 0; i < length; i++) {
		randomPassword += password.charAt(Math.floor(Math.random() * password.length));
	}

	document.getElementById('displayPassword').innerHTML = randomPassword;
}

// var copy = document.querySelector('#copy');

// copy.addEventListener('click', function() {
// 	copyPassword();
// });

// function copyPassword() {
// 	document.getElementById('password').select();
// 	document.execCommand('Copy');
// 	alert('Password copied to clipboard!');
// }
