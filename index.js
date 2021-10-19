const fs = require("fs");
const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];


const menu = [
    {
        type: "list",
        name: "menuSelect",
        message: "Add an engineer, intern, or finish?",
        choices: ["Engineer", "Intern", "Completed"],
    },
];

//Manager Questions
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice",
    },
];


//Engineer questions
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engName",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engID",
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engEmail",
    },
    {
        type: "input",
        message: "What is the engineer's github username?",
        name: "engGit",
    },
];


//Intern questions
const internQuestions = [
    {
        type: "input",
        message: "What is the inern's name?",
        name: "intName",
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "intID",
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "intEmail",
    },
    {
        type: "input",
        message: "What is the name of the school?",
        name: "intSchool",
    },
];




const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((r) => 
            {
                let newManager = new Manager(
                    r.managerName,
                    r.managerID,
                    r.managerEmail,
                r.managerOffice
          );
            team.push(newManager);
        })
        .then(() => {
            menuInit();
        })
        .catch(() => {
            console.log("Please try again");
        });
};


const menuInit = () => {
    inquirer
        .prompt(menu)
        .then((response) => 
        {
            if (response.menuSelect === "Engineer") {
                inquirer
                    .prompt(engineerQuestions)
                    .then((r) => {
                        let newEng = new Engineer(
                            r.engName,
                            r.engID,
                            r.engEmail,
                            r.engGit
                        );
                        team.push(newEng);
                        menuInit();
                    })
                    .catch();
            }
            if (response.menuSelect === "Intern") {
                inquirer
                    .prompt(internQuestions)
                    .then((r) => {
                        let newInt = new Intern(
                            r.intName,
                            r.intID,
                            r.intEmail,
                            r.intSchool
                        );
                        team.push(newInt);
                        menuInit();
                    })
                    .catch();
            }
            if (response.menuSelect === "Completed") {
                complete(team);
            }
        })
        .catch(() => {
            console.log("Please try again.");
        });
};




const complete  = (team) => {
        fs.writeFile("./dist/team.html", pageTemplate(team), (err) => {
            if (err) {
            return console.error(err);
                    }
                });
    };


init();

