import { validateCardNumber } from "../service/cardValidationService.js";

describe("validateCardNumber", () => {

    test("should return true for a valid card number", () => {
        const result = validateCardNumber("4532015112830366");

        expect(result).toBe(true);
    });

    test("should return false for an invalid card number", () => {
        const result = validateCardNumber("4532015112830367");

        expect(result).toBe(false);
    });

    test("should return false if card number contains letters", () => {
        const result = validateCardNumber("45320151128303ab");

        expect(result).toBe(false);
    });

    test("should return false if card number is not 16 digits", () => {
        const result = validateCardNumber("123456789");

        expect(result).toBe(false);
    });

    test("should accept card numbers with spaces", () => {
        const result = validateCardNumber("4532 0151 1283 0366");

        expect(result).toBe(true);
    });

    test("should accept card numbers with hyphens", () => {
        const result = validateCardNumber("4532-0151-1283-0366");

        expect(result).toBe(true);
    });

    test("should return false if card number contains non-digit characters", () => {
        const result = validateCardNumber("45320151128303ab");

        expect(result).toBe(false);
    });

    test("should return false if card number contains special characters", () => {
        const result = validateCardNumber("45320151128303@6");

        expect(result).toBe(false);
    });
});