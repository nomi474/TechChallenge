<p align="center">
    <h1 align="center">Heroku Login TechChallenge Repository</h1>
    <br />
    <a href="https://www.cypress.io">
        <img align="center" src="https://avatars0.githubusercontent.com/u/8908513?s=200&v=4" alt="Logo" height="50">
    </a>
    <br />
</p>

## Table of Contents
* [Setting up project](#Setting-up-project)
* [Test execution](#test-execution)
  * [Execute tests with Cypress UI](#execute-tests-with-cypress-ui)
  * [Execute tests in terminal](#execute-tests-in-terminal)
* [Project Structure](#project-structure)
    
## Setting up project
1. Clone the repository
    ```text
    https://github.com/nomi474/TechChallenge.git
    ```
2. Open the terminal (project ./root_dir) and execute the command below:
    ```text
    npm install
    ```
3. After the script is done, you will have all the dependencies and cypress TestRunner window will launch  

## Cypress Execution commands
### Execute tests with Cypress GUI
1. To open cypress GUI and run tests
```
.\node_modules\.bin\cypress open
```
2. After the application started, you can:
    - select a test file to execute (*.spec.js)
    - Run all tests with `Run all specs` button

### Execute tests in terminal
- Open the terminal (in the project folder)
    - To execute test cases in a specific `*.feature` file, execute the following command:
        ```
        cypress run -s cypress/integration/login.feature
        ```
    - To execute all `*.feature` files under a folder, execute the following command:
        ```
        cypress run -s cypress/integration/*

## Project Structure (Cypress Dir)
```text
├── fixtures
│   ├── account.json
├── integration
│   ├── stepdefs
│   │    └── login-steps.js
│   └── login.feature
├── page-objects
│   ├── stepdefs
│   └── base-page.js
│   └── common-page.js
│   └── login-page.js
│   └── secure-page.js
├── plugins
│   └── index.js
└── support
    ├── commands.js
    └── index.js
```