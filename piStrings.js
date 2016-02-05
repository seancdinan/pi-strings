// Load in the data
var rawDigits = require('./piDigits.js');
var piDigits = JSON.parse(rawDigits);

// Remove the spaces and decimal
var digits = piDigits[0]["numbers"][0];
digits = digits.replace(/\s/g, '');
digits = digits.replace(/\./g, '');


function isInString(input, string) {
	// Determines if 'input' exists within 'string'
	var tester = false;

	for (var i = 0; i < string.length; i++) {

		// Finds a match:
		if (string[i] == input[0]){
			console.log('Found one at: index[', i, '].')

//************ THIS IS THE BROKEN PART ******************************//
			for (var n = 0; n < input.length; n++)
				if (input[n] == string[i + n])
					console.log('\nn =', n, 'input[',n,'] =', input[n],'\ndigits[',i+n,'] =', string[i+n],'\n')
			break
		}
//******************************************************************//

		// Doesn't find a match:
		else console.log('Didn\'t find one at index[',i,'].')
	}
	return tester;
}


console.log(isInString('dfg', digits))
