# Plutora_Challenge

# Tools require

1.  MS vscode

# Prerequisite
1. Make sure Node.js is already installed into the machine if not than you can download and install from here https://nodejs.org/en/download/ (follow the steps to install the same https://www.journaldev.com/7402/node-js-environment-setup-node-js-installation)
2. Set the environment variable to the path location of installed node.js (this will be in program files, follow the steps from here https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10#:~:text=Use%20the%20global%20Search%20Charm,C%3A%5CProgram%20Files%5Cnodejs%20.)
 


# Steps to build Project

1. Clone the project from this GIT repo into the local folder.
2. Open the Terminal
3. Make sure you are in the folder "Plutora_Challenge" on the terminal
4. Write the command "npm install-test" in the terminal (this will install all the required packages and it will execute the test cases once packges are downloaded, it will run the test cases in chrome on headed mode)
5. Make sure your project got the folder "node_modules" after doing the installation of packages

# To run the Test cases on headless mode

Write the command "yarn test --headless" (this will execute the test cases on chrome browser)

# Report
Once it executes all the test cases, it will automatically run the allure report and it will display the result on chrome browser automatically.
If needs to run explicitly again open index.html file from the folder allure-report

#Limitations
This framework only supports Chrome
