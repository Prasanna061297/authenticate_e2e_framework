# cypress_e2e_framework
Authenticate_amazon_javascript_e2e_framework

# Cypress Setup and Execution Documentation

1. ### Installing Cypress
Before running Cypress, you need to install it. Ensure you have Node.js and
If not, download and install them from Node.js official site.

Open your terminal or command prompt.
Navigate to your project directory where Cypress is to be installed.

This command adds Cypress to your project's dependencies.
after this command we have see node module folder and there dependencies 
all the requierd dependencies was decalred in package.json file

`npm install `

2. ### Opening Cypress
This command launches the Cypress Test Runner, which allows you to interact with and run your tests in a graphical interface.

`npx cypress open`

3. ### Running Cypress Tests
To run Cypress tests in headless mode (without the GUI):
This command runs all your Cypress tests and outputs the results directly to the terminal.

`npx cypress run`

##############################################################################################################################################################################################################################################################################################################
Authenticate_amazon_javascript_e2e_framework

### Cypress  custimzed Folder Structure Overview

`cypress/ :Folder`

`fixtures/`: Contains test data files (e.g., .json, .csv, .xml) that can be used for stubbing responses or as input data for tests.
`integration/`: (testsuite): Contains your test files (e.g., .spec.js, .spec.ts) that include the test cases and test suites written in Cypress.
`pages/`: This is a custom folder (not part of the default Cypress structure) where you can store page objects for your tests.
`support/`: Contains helper functions, custom commands, and configurations that are used across multiple tests.
`node_modules/`:  Folder Contains all the dependencies and packages installed via npm.
`target/`: Folder coantains failed results af test case with screenshot and evidence like videos 

##############################################################################################################################################################################################################################################################################################################

#### Customizing Cypress Framework: Key Files and Implementations

1. `Key Files for Customization`
**package.json**:

This file holds the metadata about the project and its dependencies, scripts, and configuration.
Usage:
Dependencies: Lists all the npm packages required for the project, including Cypress and other plugins.
Scripts: You can define custom scripts to run commands like npm test, npm run cypress:open, or npm run cypress:run.

**cypress.config.js**:

This is the main configuration file for Cypress, where you define the settings for your tests.
Usage:
Base URL: Define the base URL for your tests.
Custom Commands: Import and register custom commands.
Video & Screenshots: Configure whether to capture videos and screenshots during tests.

**eslint**:

ESLint is a tool for identifying and fixing problems in your JavaScript code. It ensures code quality and consistency.
Usage:
Linting Rules: Define custom linting rules to enforce coding standards.
Integration with Cypress: Configure ESLint to work seamlessly with Cypress commands and structure.

2. ### New Implementations in the Framework

**import**:
Standard JavaScript ES6 import syntax is used to include different modules or functions from other files.

import { login } from './pages/loginPage';
Login login = new Login()

const login = requierd("./pages/loginPage")


**waitForStable**:

A custom command that waits for the UI to become stable before proceeding. Useful for waiting until all AJAX requests or animations are complete.

**videoScreenshot**:

Configuration to enable or disable video recording and screenshots during tests. Useful for debugging.
Usage:
Enable or disable via cypress.config.js:

**POM (Page Object Model)**:

A design pattern where page functionality is encapsulated in page objects, which can then be reused across tests.
Usage:
Create page classes with methods that represent actions on the pages folder.

**BasePage**:

A parent class from which other page objects inherit common methods and properties, reducing redundancy.
Usage:
Create a BasePage class with common methods like type, get , handling click, etc.

**SQL Server**

Usage:
Integrate SQL Server with Cypress to validate backend data against frontend results or perform database setup/teardown operations.

##############################################################################################################################################################################################################################################################################################################















