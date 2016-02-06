//*************************************************
//**************  Boring Parts  *******************
//*************************************************
// Load in the data
var rawDigits = require('./piDigits.js');
var piDigits = JSON.parse(rawDigits);
// Remove the spaces and decimal
var digits = piDigits[0]["numbers"][0];
digits = digits.replace(/\s/g, '');
digits = digits.replace(/\./g, '');
//*************************************************
//*****************  Functions  *******************
//*************************************************
function isInString(input, string) {
	// Determines if 'input' exists within 'string'
	var tester = false;

	for (var i = 0; i < string.length; i++) {
		// Stop if a match has already been found:
		if (tester == true) {return ['\n\nYour string begins at index[',i-1,'] in pi.\n\n'].join(''); break;}
		
		// Look for match:
		if (string[i] == input[0]){
			//console.log('***************************************************\nFound one at: index[', i, ']:')
			for (var n = 0; n < input.length; n++) {
				if (input[n] == string[i + n]) {
					//console.log(['n = ', n, ', mine[',n,'] = ', input[n],'\ni = ',i+n,',   pi[',i+n,'] = ', string[i+n],'\n'].join(''));
					tester = true;
				}
				else { 
					tester = false;
					break
				}}}}
	return '\n\nYour string doesn\'t occur in the first 10,000 digits of pi :(\n\n';
}
//*************************************************
//************ Run Some Tests  ********************
//*************************************************
console.log(isInString('2516', digits))
