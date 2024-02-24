Certainly, here's the README content without the bash code blocks:

# TypeScript Backend

This project is a backend service built with NestJS, TypeScript, and other supporting technologies. It's designed to provide a robust API for web applications.

## Getting Started

Before you begin, ensure you have Node.js (preferably the latest stable version) and npm installed on your machine.

### Installation

Clone the repository and install its dependencies:

1. `git clone`
2. `cd typescript-backend`
3. `npm install`

### Running the Application

You can run the application in various environments using the following commands:

- **Development Mode**: Watches for file changes and automatically reloads.
    - `npm run start:dev`
- **Debug Mode**: Similar to development mode but enables debugging.
    - `npm run start:debug`
- **Production Mode**: Runs the compiled JavaScript from the `dist` directory.
    - `npm run start:prod`

### Building the Project

To build the project and generate JavaScript files in the `dist` directory:
- `npm run build`

### Formatting Code

To format your TypeScript files using Prettier:
- `npm run format`

### Linting

To lint your project files:
- `npm run lint`

## Testing

The project uses Jest for unit and e2e testing. You can run tests using the following commands:

## Testing with Postman
To test the API endpoints with Postman, follow these steps:

- Install Postman from the official website.
- Open Postman and import the Postman collection file located at fullstack-assignment/backend/coding-challenge.postman_collection.json.
- You can do this by clicking on "Import" at the top left corner of Postman and selecting the collection file.
- After importing, you will see the collection in the left sidebar. Click on it to view the pre-configured requests.
- Make sure your backend server is running, then select a request from the collection and hit the "Send" button to test it. You can modify the request details as needed.

- **Run All Tests**:
    - `npm run test`
- **Watch Mode** (re-runs tests on file changes):
    - `npm run test:watch`
- **Coverage** (generates a coverage report):
    - `npm run test:cov`
- **Debug Tests**:
    - `npm run test:debug`
- **End-to-End Tests**:
    - `npm run test:e2e`

## Dependencies

This project is built using the following major dependencies:

- NestJS for the framework
- `rxjs` for reactive programming
- `uuid` for generating unique identifiers

Development dependencies include TypeScript, ESLint, Prettier, Jest for testing, and several types packages for better development experience.