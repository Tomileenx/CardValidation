export function validateCardNumber(cardNumber: string): boolean {
    // removes all spaces and hyphens from the card number
    const digits = cardNumber.replace(/[\s-]/g, "");

    // check that the card number contains only digits 
    const isAllDigits = /^\d+$/.test(digits);
    
    // return false if the card number contains contain non-digit characters
    if (!isAllDigits) {
        return false
    }

    // return false if the card number does not contain exactly 16 digits
    if (digits.length !== 16) {
        return false
    }

    // validate the card number using the Luhn algorithm
    let sum = 0;
    let shouldDoubleDigit = false;

    // loop through the digits from the last index to first index 
    for (let i = digits.length -  1; i >= 0; i--) {
        // convert the string digit to number
        let numberDigit = Number(digits[i]);

        if (shouldDoubleDigit) {
            // if shouldDoubleDigit is true double numberDigit by 2
            numberDigit *= 2

            // if result of numberDigit is greater than 9, then subtract numberDigit by 9
            if (numberDigit > 9) {
                numberDigit -= 9;
            }
        }
        
        // add the numberDigit to sum
        sum += numberDigit;

        // alternate whether the next digit should be doubled
        shouldDoubleDigit = !shouldDoubleDigit
    }

    // checks if the sum is divisible by 10
    return sum % 10 === 0;
}