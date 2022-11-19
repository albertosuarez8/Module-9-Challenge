let fs = require("fs");
let {render} = require("mustache");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let template = fs.readFileSync("./utils/template.md").toString();
  let output = render(template, data);
  writeToFile("README", output);
}

function writeToFile(fileName, data) {
  fs.writeFileSync(`./result/${fileName}.md`, data);
}

module.exports = generateMarkdown;
