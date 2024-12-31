var alertBox = document.querySelector('.alertBox');

function generateNewPassword() {
	var length = document.getElementById("lenght")
	lenght = lenght.value
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

