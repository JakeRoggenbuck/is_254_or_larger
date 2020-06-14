// Add is_254_or_larger function to exports
exports.is_254_or_larger = function(number) {
	// Check if number is in fact a number
	if (typeof number === 'number') {
		// Check if number is equal to or larger than 254
		if (number >= 254) {
			// number is equal to or larger than 254
			return true;
		} else {
			// number is not equal to or larger than 254
			return false;
		}
	// number is not a number
	} else {
		return false;
	}
}
