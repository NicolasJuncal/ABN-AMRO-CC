Minimum Requirements (Must Do)
Epic: Frontend Development

Task 1: Set up Angular project with Angular CLI.
  Shortcuts:
  Component: ng generate component component-name or ng g c component-name
  Service: ng generate service service-name or ng g s service-name
  Module: ng generate module module-name or ng g m module-name  

Task 2: Install and configure Clarity Design System in the Angular project.
Skipping installation: Package already installed
 as it was already config.
Task 3: Create a PaymentFormComponent for inputting payment details.
 
Sub-task: Implement form fields (Sender's IBAN, Recipient's Name, Recipient's IBAN, Amount, Description).
Sub-task: Integrate GET /accounts API to populate Sender's IBAN dropdown.
Sub-task: Implement form submission to POST /payment endpoint.
Task 4: Create a PaymentsTableComponent to display list of payments.
Sub-task: Load and display payments from processedPayments.json.
Epic: Backend Development

Task 1: Set up NestJS project.
ok
Task 2: Implement GET /accounts endpoint to return sender's account details.
ok
Task 3: Implement POST /payment endpoint for payment submission.
ok
Sub-task: Validate incoming payment data.
ok
Epic: Testing

Task 1: Ensure frontend and backend are properly integrated.
Task 2: Manual testing of end-to-end functionality.
Nice to Have (Could Do)
Epic: Enhancements and Optimizations

Task 1: Implement client-side validation for the payment form.
Task 2: Add sorting and filtering capabilities to the payments table.
Task 3: Implement unit tests for critical frontend and backend functions.
Task 4: Add error handling and user feedback mechanisms in the UI.