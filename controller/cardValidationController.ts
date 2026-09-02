import type { Request, Response } from "express";
import type { CardValidationRequest } from "../interfaces/CardValidationRequest.js";
import type { CardValidationResponse } from "../interfaces/CardValidationResponse.js";
import { validateCardNumber } from "../service/cardValidationService.js";

export function validateCard(
    req: Request<{}, {}, CardValidationRequest>,
    res: Response
): void {
    const { cardNumber } = req.body;

    // Check if card number are inputed
    if (!cardNumber) {
        const response: CardValidationResponse = {
            isNumberValid: false,
            message: "Card number is required"
        }

        res.status(400).json(response);
        return;
    }

    // check if card number input is a string
    if (typeof cardNumber !== "string") {
        const response: CardValidationResponse = {
            isNumberValid: false,
            message: "Card number must be a string"
        }

        res.status(400).json(response);
        return;
    }

    const isCardNumberValid = validateCardNumber(cardNumber);

    const response: CardValidationResponse = {
        isNumberValid: isCardNumberValid,
        message: isCardNumberValid
            ? "Card number is valid"
            : "Card number is not valid"
    }

    res.status(200).json(response);
}