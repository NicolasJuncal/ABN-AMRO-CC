# Interview Assignment

## General

For this assignment, we would like you to create an application where users can input payment information via a form. The form should include a selection option for the sender's IBAN, retrieved from an API endpoint.

## Frontend

Angular 17 and the Clarity Design System will be utilized for the frontend, both of which are readily available within the project. Additional information about Clarity can be found at: [Clarity Design System](https://clarity.design/)

The frontend must include:
- A form to input payment details.
- A table to display the current list of payments.

### Form

Design the form with the following fields:
Note: **Validation can be handled by the API endpoint, specifically POST /payment**
- Sender's IBAN (predefined values retrieved from the accounts endpoint)
- Recipient's Name (String, maximum 20 characters)
- Recipient's IBAN (String, maximum 20 characters)
- Amount in USD (Maximum amount: $10,000)
- Description (Maximum 50 characters)

### Table

The table should present the payments provided in the JSON file **processedPayments.json**. (can be found in the assets folder)

You can add additional components if needed.

## Backend

For the backend, NestJS is employed, which shares similarities with Angular. Two endpoints have been provided to facilitate the task:

    GET /accounts 
Returns the accounts accessible to the user, intended for prefilling form data (e.g., Sender's IBAN).

    POST /payment
Validates the provided data for correctness and returns feedback on any errors encountered. Upon successful validation, a confirmation message indicating successful payment processing is returned.

You can add additional components and endpoints if needed. 

### Deliverables

The application should be runnable locally using `ng serve` for Angular and `npm start` for NestJS.

We would like to see  how you would deliver this in a production environment, how would you like your team to deliver the code so that its production ready.

The application is intended to showcase your proficiency in Angular(Frontend development) and NestJS (API development). You are free to choose how you handle the validation of the in Nest  if you are familiar with NestJS you could consider using the build in functions. If you are new to nestJS, you can just add your validation logic in the controller which handles the post request. 

We leave that all up to you! okay one more thing! could you list of task you would like to have added if you had more time? 

Have fun and happy codding!

The Team @AACB

