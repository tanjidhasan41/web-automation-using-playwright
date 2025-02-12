# Playwright Automation - DailyFinance

## Project Description
This project automates the testing of the [DailyFinance](https://dailyfinance.roadtocareer.net/) web application using Playwright JS. The test suite covers the following functionalities:
- User registration and validation of confirmation email & toast message
- Login and adding two random items to the list
- Profile photo upload and logout
- Password reset process and successful login validation

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [Playwright](https://playwright.dev/)
- Git

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-link>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## What I Have Done
- Implemented Playwright test cases to cover the registration, login, item addition, profile update, password reset, and re-login functionalities.
- Added assertions to validate toast messages and email confirmation.
- Included necessary negative test cases to check for improper inputs and error handling.
- Configured `.gitignore` to exclude unnecessary files and folders (`node_modules`, `.env`, etc.).
- Generated test reports using **Allure/Mochawesome**.
- Recorded the automation process and included it in the documentation.

## How to Run the Tests
To execute the Playwright test cases, follow these steps:

### Running All Tests
```sh
npx playwright test
```

### Running Tests with Allure Report
```sh
npx playwright test --reporter=line,allure
```
To view the Allure report:
```sh
npx allure serve allure-results
```

### Running Tests with Mochawesome Report
```sh
npx playwright test --reporter=mochawesome
```

### Running Specific Test
```sh
npx playwright test tests/<test-file-name>.spec.js
```

## Test Report & Documentation
- **Negative Test Cases:**

https://docs.google.com/spreadsheets/d/1DoJlULIBjlhsh0IDqlJhaE_nHdesnNsf9A4BreD23as/edit?usp=sharing
  
- **Automation Process Recording:**

https://github.com/user-attachments/assets/75aaddda-8873-4fc7-ba82-e3698ef3b9d2
  
- **Screenshots & Reports:**

![image](https://github.com/user-attachments/assets/32fee694-a9ca-4a17-b31c-30228865e16b)

![image](https://github.com/user-attachments/assets/a930e1c5-8067-48df-b413-c1e1c7fa5b04)


---

This repository is maintained for testing and automation purposes. Feel free to contribute or report issues!

