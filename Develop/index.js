var inquirer = require("inquirer");
var fs = require("fs");
var api = require("./utils/api.js");



const questions = [
    {
    name: "username",
    message: "What is your GitHub username?",
    type: "input"
    },

    {
    name: "title",
    message: "What is the title of your project?",
    type: "input"
    },
    
    {
    name:"description",
    message: "Please provide a description of your project.",
    type: "input"
    },
    
    {
    name:"license",
    message:"ISC",
    type:"choices"
    },

    {
    name: "version",
    message: "(1.0.0)",
    type: "input"
    },

    {
    name:"install",
    message:"What command should be run to install dependencies?",
    type:"input"
    },

    {
    name:"test",
    message:"What command should be used to run tests?",
    type: "input",
    },

    {
    name:"usage",
    message:"What information is needed to use the repo?",
    type: "input"
    },

    {
    name:"contribute",
    message:"What information is needed to contribute to the repo?",
    type: "input"
    },

    {
    name:"badge",
    message:"Please select one or more badges.",
    type: "checkboxes"
    }

];
inquirer.prompt(questions)
.then(async function(answers)  {
var gitRes = await api.getUser(answers.username);

    console.log("myCheck", answers);
});
    
    
    
// function(answers) {
// console.log(answers);
// api.getUser(answers.username).then(function(data){
// data.repos_url
// }).catch(function(err) {
// console.log(err);
// })
// });

// console.log(answers);


// var genREADME = generateMarkdown(answers);
// var fileName = "generatedREADME.md";
// fs.write(fileName, data) 


// function init() {
// }

    // init();


