// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber.substring(0,4);
  var length = cardNumber.length;
  if ((prefix.substring(0,2) === '38' || prefix.substring(0,2) === '39') && length === 14) {
  	return 'Diner\'s Club';
  } else if ((prefix.substring(0,2) === '34' || prefix.substring(0,2) === '37') && length === 15) {
  	return "American Express";
  } else if (prefix.substring(0, 1) === '4' && (length === 13 || length === 16 || length === 19)) {
  	return 'Visa';
  } else if ((prefix.substring(0,2) === '51' || prefix.substring(0,2) === '52' || prefix.substring(0,2) === '53' || prefix.substring(0,2) === '54' || prefix.substring(0,2) === '55') && length === 16) {
  	return 'MasterCard';
  } else if ((prefix === '6011' || prefix.substring(0,3) === '644' || prefix.substring(0,3) === '645' || prefix.substring(0,3) === '646' || prefix.substring(0,3) === '647' || prefix.substring(0,3) === '648' || prefix.substring(0,3) === '649' || prefix.substring(0,2) === '65') && (length === 16 || length === 19)) {
  	return 'Discover';
  } else if ((prefix === '5018' || prefix === '5020' || prefix === '5038' || prefix === '6304') && (length > 11 && length < 20)) {
  	return 'Maestro';
  }
};


