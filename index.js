const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const renderHTML = require("./dist/generator");
const teamHeader = [];
const teamMembers = [];

//enter team name

function teamNameIs() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Hello, please enter your Team Name!",
        name: "team",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter the Team Name to begin!";
          }
          return true;
        },
      },
    ])
    .then(function (data) {
      const teamNameIs = data.team;
      teamHeader.push(teamNameIs);
      renderManager();
    });
}

//manager questions

function renderManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please, enter your manager's name.",
        name: "name",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter the manager name!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter an ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
        //validate the input
        validate: function (input) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            return "You must enter an valid email address!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the manager's office phone number?",
        name: "office",
        //validate the input
        validate: function (input) {
          if (!/^\d*(\.\d+)?$/.test(input)) {
            return "Phone number cannot contain letters or symbols!";
          } else if (input === "") {
            return "You must enter an office phone number!";
          }
          return true;
        },
      },
    ])

    .then(function (managerFields) {
      const { name, id, email, office } = managerFields;
      const manager = new Manager(name, id, email, office);
      teamMembers.push(manager);
      addTeamMembers();
    });
}

//enginner

function renderEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please, enter the engineer's name.",
        name: "name",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter the engineer name!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter an ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
        //validate the input
        validate: function (input) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            return "You must enter an valid email address!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "username",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter a GitHub username!";
          }
          return true;
        },
      },
    ])
    .then(function (engineerFields) {
      const { name, id, email, username } = engineerFields;
      const engineer = new Engineer(name, id, email, username.trim());
      teamMembers.push(engineer);
      addTeamMembers();
    });
}

//intern

function renderIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please, enter the intern's name.",
        name: "name",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter the intern name!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter an ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
        //validate the input
        validate: function (input) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            return "You must enter an valid email address!";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the intern's school name?",
        name: "school",
        //validate the input
        validate: function (input) {
          if (input === "") {
            return "You must enter a school name!";
          }
          return true;
        },
      },
    ])
    .then(function (internFields) {
      const { name, id, email, school } = internFields;
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      addTeamMembers();
    });
}

//adding more members

function addTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new member?",
        name: "addMembers",
        choices: [
          "Yes, please add an engineer.",
          "Yes, please add an intern.",
          "No, my team is complete!",
        ],
      },
    ])
    .then(function (data) {
      const addTeamMembers = data.addMembers;
      switch (addTeamMembers) {
        case "Yes, please add an engineer.":
          if (addTeamMembers === "Yes, please add an engineer.") {
            return renderEngineer();
          }
        case "Yes, please add an intern.":
          if (addTeamMembers === "Yes, please add an intern.") {
            return renderIntern();
          }
        case "No, my team is complete!":
          if (addTeamMembers === "No, my team is complete!") {
            return writeToFile(
              "index.html",
              renderHTML(teamHeader, teamMembers)
            );
          }
      }
    });
}

//error catch

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      return console.error(error);
    } else {
      return console.log(
        "\x1b[32m",
        "\n------Your Team Profile was successfully generated!------"
      );
    }
  });
}

function init() {
  teamNameIs();
}

init();
// runs the application
