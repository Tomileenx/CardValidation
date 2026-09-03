## CardValidation API

Card validation is a simple REST API that validates a card number using the Luhn algorithm.

The Luhn algorithm validates a number by working from right to left, doubling every second digit, reducing doubled values greater than 9 by subtracting 9, adding all the digits, and checking whether the total is divisible by 10.

## Technology Stack

- Node.js
- TypeScript
- Express.js

## Project Structure

```text
CardValidation/
├── controller/
│   └── cardValidationController.ts
│
├── interfaces/
│   ├── CardValidationRequest.ts
│   └── CardValidationResponse.ts
│
├── route/
│   └── cardValidationRoutes.ts
│
├── service/
│   └── cardValidationService.ts
│
├── test/
│   ├── cardValidationService.test.ts
│   └── cardValidationController.test.ts
│
├── index.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Project Installation

- Clone repository: `git clone <repository-url>`
- Install dependencies: `npm install`
- Run the application: `npm run dev`
- Server: `http://localhost:3000`

## API Endpoint

- POST
- URL: `http://localhost:3000/api/validateCardNumber`
- Request Body:
    ```json
    {
        "cardNumber": "4532 0151 1283 0366"
    }
    ```

- Valid Card Response:
    ```json
    {
        "isNumberValid": true,
        "message": "Card number is valid"
    }
    ```
    
    **Status Code:** 200 OK

- Invalid Card Response:
    ```json
    {
        "isNumberValid": false,
        "message": "Card number is not valid"
    }
    ```

    **Status Code:** 200 OK

- Missing Card Number:
    ```json
    {
        "isNumberValid": false,
        "message": "Card number is required"
    }
    ```

    **Status Code:** 400 Bad Request

- Card Number not string:
    ```json
    {
        "isNumberValid": false,
        "message": "Card number must be a string"
    }
    ```

    **Status Code:** 400 Bad Request


## Card Number Validations

- Checks if the card number is provided.
- Checks if the card number is a string.
- Removes spaces and hyphens from the card number.
- Checks if the card number contains only digits.
- Checks if the card number contains exactly 16 digits.
- Uses the Luhn algorithm to determine if the card number is valid.

## TypeScript Configuration

- The project uses TypeScript with strict mode enabled:
     ```json
    {
        "compilerOptions": {
            "strict": true
        }
    }
    ```

## Tests

- Project tests: Jest
- Endpoint testing: Postman
- Run the tests

    `npm test`


