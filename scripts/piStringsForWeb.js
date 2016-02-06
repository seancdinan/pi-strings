//*************************************************
//**************  Boring Parts  *******************
//*************************************************
// Load in the data
//var rawDigits = require(['./piDigits.js'], function(){});
//var piDigits = JSON.parse(rawDigits[0]);
// Remove the spaces and decimal
//var digits = piDigits[0]["numbers"][0];
var digits = piDigits[0]["numbers"];
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
//***************  HTML Inputs  *******************
//*************************************************

var input = document.getElementById('searchValue').value;
var runIt = document.getElementById('testSubmit');
var output= document.getElementById('answer');

// function printResult(input,button,output) {
// 	button.onclick = function() {
// 		//var input = document.getElementById('searchValue').value;
// 		var result = isInString(input, digits);
// 		output.textContent = result;
// 		alert(result);
// 	}
// }
function printResult(input) {
	var result = isInString(input, digits);
	alert(result);
}

printResult(314);
//alert(digits);

// runIt.onclick = function() {
// 	var input = document.getElementById('searchValue').value;
// 	var result = isInString(input, digits);
// 	var printAnswer = document.getElementById('answer');
// 	printAnswer.textContent = result;
// }










