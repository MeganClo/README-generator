// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'author',
        message: 'Please enter your name. (Required)',
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log("You must enter your name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub user name. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("You must enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project. (Required)', 
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You must enter your project's name.");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallInfo',
        message: 'Would you like to share installation instructions or information?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please share installation instructions or information.',
        when: ({ confirmInstallInfo }) => confirmInstallInfo
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to share how your project is used?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please share usage information for your program.',
        when: ({ confirmUsage }) => confirmUsage
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Are you open to contributions?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please share what your requirements are for excepting contributions.',
        when: ({ confirmContribution }) => confirmContribution
    },
    {
        type: 'confirm',
        name: 'confirmAcknowledgment',
        message: 'Do you have people or other applications that you would like to acknowledge for their contributions to your project?',
        default: false
    },
    {
        type: 'input',
        name: 'acknowledgment',
        message: 'Please share any additional authors, contributors, or applications that helped you build your project.',
        when: ({ confirmAcknowledgment }) => confirmAcknowledgment
    },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to give instructions on how to run tests for your project/application?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please share testing instructions',
        when: ({ confirmTesting }) => confirmTesting
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license that your application is covered under.',
        choices: ['Apache', 'Boost Software License', 'BSD', 'The MIT License', 'Mozilla Public License', 'Open Database License', 'GNU']
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File Created!"
            });
        }); 
    });
};

promptUser()
.then(data => {
    return generateMarkdown(data)
})
.then(readMePage => {
    console.log("README created!")
    return writeToFile(readMePage);
})
.catch(err => {
    console.log(err);
});
