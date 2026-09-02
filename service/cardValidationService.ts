export function validateCardNumber(cardNumber: string): boolean {
    const digits = cardNumber.replace(/[\s-]/g, "");

    const isAllDigits = /^\d+$/.test(digits);
    
    if (!isAllDigits) {
        return false
    }

    if (digits.length !== 16) {
        return false
    }

    let sum = 0;
    let shouldDoubleDigit = false;

    for (let i = digits.length -  1; i >= 0; i--) {
        let numberDigit = Number(digits[i]);

        if (shouldDoubleDigit) {
            numberDigit *= 2

            if (numberDigit > 9) {
                numberDigit -= 9;
            }
        }
        
        sum += numberDigit;

        shouldDoubleDigit = !shouldDoubleDigit
    }

    return sum % 10 === 0;
}