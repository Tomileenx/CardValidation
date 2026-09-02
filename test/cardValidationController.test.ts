import { jest } from "@jest/globals";
import { validateCard } from "../controller/cardValidationController.js";

describe("validateCard", () => {

    test("should return 400 if card number is missing", () => {
        const req = {
            body: {}
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        validateCard(req as any, res as any);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            isNumberValid: false,
            message: "Card number is required"
        });
    });


    test("should return 400 if card number is not a string", () => {
        const req = {
            body: {
                cardNumber: 4532015112830366
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        validateCard(req as any, res as any);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            isNumberValid: false,
            message: "Card number must be a string"
        });
    });


    test("should return 200 if card number is valid", () => {
        const req = {
            body: {
                cardNumber: "4532015112830366"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        validateCard(req as any, res as any);

        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalledWith({
            isNumberValid: true,
            message: "Card number is valid"
        });
    });


    test("should return 200 if card number is invalid", () => {
        const req = {
            body: {
                cardNumber: "4532015112830367"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        validateCard(req as any, res as any);

        expect(res.status).toHaveBeenCalledWith(200);

        expect(res.json).toHaveBeenCalledWith({
            isNumberValid: false,
            message: "Card number is not valid"
        });
    });

});