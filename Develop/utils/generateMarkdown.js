function generateMarkdown(answers) {
  return `
# ${answers.title}
## ${answers.description}
## ${answers.content}
## ${answers.install}
## ${answers.usage}
## ${answers.contribute}
## ${answers.license}
## ${answers.badge}
## ${answers.test}
`;
}


module.exports = generateMarkdown;
