var phoneNumberChecker = function (number) {
	if (isNaN(number)) {
		return false;
	} else if (number > 999999 && number < 10000000) {
		return true;
	} else if (number > 999999999 && number < 10000000000) {
		return true;
	} else { 
		return false;
	}
}

module.exports = phoneNumberChecker