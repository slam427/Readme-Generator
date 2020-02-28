var inquirer = require("inquirer");
var fs = require("fs");
var api = require("utils/api.js");

const questions = [
    {name: "title",
    message: "What is the title of your project?",
    type: "input"
    },
    {
    name: "userName",
    message: "What is your GitHub username?",
    type: "input"
    },
    {
    name: "repoLocation",
    message: "What is the location of your respository?",
    type:"input"
    }
];
inquirer.prompt(questions)
.then(function(answers) {
console.log(answers);
api.getUser(answers.userName).then(function(data){
data.repos_url
}).catch(function(err){
console.log(err);
})
});


var fileName = "generatedReadME.md"
function writeToFile(fileName, data) {
}

function init() {

}

init();
