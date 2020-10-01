function generateNewPassword() {
	var length = Number(prompt('How many characters would you like your password to be?'));

	if (isNaN(length) || length < 8 || length > 128) {
		alert("The length doesn't meet the requirements");
		return;
	}

	var symbols = confirm('Would you like to use special characters?');
	var uppers = confirm('Would you like to use uppercase letters?');
	var lowers = confirm('Would you like to use lowercase letters?');
	var numbers = confirm('Would you like to use numbers?');

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

	for (var i = 0; i < length; i++) {
		var password = Math.floor(Math.random() * length) + 1;

		document.getElementById('displayPassword').innerHTML = password;

		console.log(password);
	}
}
