function isInString(input, string) {
	// Determines if 'input' exists within 'string'
	var tester = false;

	for (var i = 0; i < string.length; i++) {
		// Stop if a match has already been found:
		if (tester == true) {return ['\n\nYour string begins at index[',i-1,'] in pi.\n\n'].join(''); break;}
		
		// Look for match:
		if (string[i] == input[0]){
			for (var n = 0; n < input.length; n++) {
				if (input[n] == string[i + n]) {
					tester = true;
				}
				else { 
					tester = false;
					break
				}}}}
	return '\n\nYour string doesn\'t occur in the first 100,000 digits of pi :(\n\n';
}

function findMatch(input) {
	var result = isInString(input, digits);
	document.getElementById('answer').innerHTML = result;
}













