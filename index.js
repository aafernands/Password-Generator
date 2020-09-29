






var messageLength = 148;
function myFunction() {
	var message = prompt('Write a message:');
	var charactersCount = message.length;
	alert(`You have written ${message.length} characters, you have ${148 - message.length} characters remaining.`);
	document.getElementById('yourMessage').innerHTML = message
	document.getElementById('charactersCount').innerHTML = charactersCount
	document.getElementById('messageLength').innerHTML = messageLength
	document.getElementById('remainingCharacters').innerHTML = charactersCount - 148
}